import React, { createContext, useState, useContext } from 'react';
import { CartInterface, CreditCardInterface, CreditCardInputOption } from '../CartInterface';
import { ProductInterface, ProductKeyValueInterface } from '../../Products/ProductInterface';
import { CartContextInterface } from './CartContextInterfaces';
import graphqlService from '../../../services/graphqlService';
import CartItemAddMutation from '../__generated__/cartItemAddMutation.graphql';
import CartItemRemoveQuery from '../__generated__/cartItemRemoveQuery.graphql';
import CartItemUpdateQuantityMutation from '../__generated__/cartItemUpdateQuantityMutation.graphql';
import CartActiveQuery from '../__generated__/cartActiveQuery.graphql';
import ProductsFilterQuery from '../../Products/__generated__/productsFilterQuery.graphql';
import CartCheckoutMutation from '../__generated__/cartCheckoutMutation.graphql';
import { NotificationContext } from '../../../layout/Notifications/NotificationContext';
import { NotificationLevelOption } from '../../../layout/Notifications/NotificationInterfaces';
import { getLocalStorageValue, setLocalStorageValue } from '../../../helpers/LocalStorageHelpers';
import { OrderInterface } from './OrderInterface';

const cartInitialState = {
  total: 0.00,
  status: 'Active',
  quantity: 0,
  products: [],
};

const CREDIT_CARD = {
  refusedCard: {
    paymentCard: 'VISA',
    paymentType: 'CREDIT_CARD',
    creditCardNumber: 'XXXX-XXXX-XXXX-9988'
  },
  acceptedCard: {
    paymentCard: 'MASTER',
    paymentType: 'CREDIT_CARD',
    creditCardNumber: 'XXXX-XXXX-XXXX-8889'
  },
}

interface CartProviderProps {
  children: React.PropsWithChildren<React.ReactNode>,
}

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

export const CartProvider = (props: CartProviderProps): JSX.Element => {
  const [cart, setCart] = useState<CartInterface>(cartInitialState as CartInterface);
  const [cartItemDetails, setCartItemDetails] = useState<ProductKeyValueInterface>({});
  const { showNotification } = useContext(NotificationContext);
  const noficationParams = {
    show: true,
    message: '',
    level: NotificationLevelOption.info,
  };

  if (!cart._id) {
    const localCart = (getLocalStorageValue('clientCart', cart) as CartInterface);
    if (localCart && localCart._id) {
      setCart(localCart as CartInterface);
    }
  }

  const updateCart = (cart: CartInterface) => {
    setLocalStorageValue('clientCart', cart);
    setCart({ ...cart });
  }
  const hasProductInCart = (id: string): boolean => {
    if (!isCartEmpty()) {
      const hasInCart = cart.products.find(({ productId }) => productId === id)
      return Boolean(hasInCart);

    }
    return false;
  };

  const addItem = async (productId: string) => {
    const { success, data, errorMessages } = await graphqlService(CartItemAddMutation.params.text, { productId });

    if (success) {
      updateCart(data as CartInterface);
      noficationParams.message = 'Product was added in cart';
      noficationParams.level = NotificationLevelOption.info;

    } else {
      noficationParams.message = errorMessages as string;
      noficationParams.level = NotificationLevelOption.error;
    }
    showNotification(noficationParams)
  };

  const removeItem = async (id: string) => {
    const { success, data, errorMessages } = await graphqlService(CartItemRemoveQuery.params.text, { productId: id });
    if (success) {
      updateCart(data as CartInterface);
      noficationParams.message = 'Product was removed from cart';
      noficationParams.level = NotificationLevelOption.info;
    } else {
      noficationParams.message = errorMessages as string;
      noficationParams.level = NotificationLevelOption.error;
    }
    showNotification(noficationParams)
  }

  const loadCartItemsDetails = async () => {
    try {
      if (!isCartEmpty()) {
        const idList = cart.products.map(({ productId }) => productId);
        const { success, data } = await graphqlService(ProductsFilterQuery.params.text, { idList });
        if (success) {
          const productKeyValue: ProductKeyValueInterface = {};
          (data as Array<ProductInterface>).forEach((product: ProductInterface) => {
            productKeyValue[product._id] = product
          });
          setCartItemDetails({ ...productKeyValue });
        } else {
          noficationParams.message = 'Error to load cart';
          noficationParams.level = NotificationLevelOption.warning;
          showNotification(noficationParams)
        }
      } else {
        noficationParams.message = 'cart is empty';
        noficationParams.level = NotificationLevelOption.warning;
        showNotification(noficationParams)
      }

    } catch (error) {
      console.error(error);
    }
  }

  const updateCartItemQuantity = async (id: string, quantity: number) => {
    const variables = { productId: id, quantity };
    const { success, data, errorMessages } = await graphqlService(CartItemUpdateQuantityMutation.params.text, variables);
    if (success) {
      setCart({ ...(data as CartInterface) });
    } else {
      noficationParams.message = errorMessages as string;
      noficationParams.level = NotificationLevelOption.warning;
      showNotification(noficationParams)
    }
  }

  const clearCart = (): void => {
    setCart(cartInitialState);
  }

  const totalCartItems = (): number => cart.quantity;

  const isCartEmpty = () => totalCartItems() === 0;

  const loadCart = async () => {
    const { success, data, errorMessages } = await graphqlService(CartActiveQuery.params.text, {});
    if (success && data) {
      updateCart(data as CartInterface);
    } else if (!success) {
      noficationParams.message = errorMessages as string;
      noficationParams.level = NotificationLevelOption.warning;
      showNotification(noficationParams)
    }
  }

  const totalAmountCartItems = (): number => {
    let totalAmount = 0;
    if (!isCartEmpty()) {
      for (const cartItem of cart.products) {
        totalAmount += cartItem.price * cartItem.quantity;
      }
    }

    return totalAmount;
  };

  const getCreditCard = (cardName: CreditCardInputOption) => (CREDIT_CARD[cardName] as CreditCardInterface);

  const makeCheckout = async (payment: CreditCardInputOption): Promise<boolean> => {
    const { success, data } = await graphqlService(CartCheckoutMutation.params.text, getCreditCard(payment));
    const order = data as OrderInterface;
    if (success) {
      if (order.payment.paymentStatus !== 'REFUSED') {
        setCart({ ...cartInitialState });
        noficationParams.message = 'Your payment was accepted';
        noficationParams.level = NotificationLevelOption.success;
        return true;
      } else {
        noficationParams.message = 'Your payment was refused';
        noficationParams.level = NotificationLevelOption.warning;
      }
      showNotification(noficationParams)
    }

    return false;
  }

  return (
    <CartContext.Provider
      value={{
        removeItem,
        addItem,
        loadCartItemsDetails,
        loadCart,
        clearCart,
        hasProductInCart,
        totalCartItems,
        isCartEmpty,
        updateCartItemQuantity,
        totalAmountCartItems,
        cart,
        products: cart.products,
        cartItemDetails,
        getCreditCard,
        makeCheckout,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

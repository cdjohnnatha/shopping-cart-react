import React, { createContext, useState, FC } from 'react';
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

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

export const CartProvider: FC = (props: React.PropsWithChildren<React.ReactNode>) => {
  const [cart, setCart] = useState<CartInterface>(cartInitialState as CartInterface);
  const [cartItemDetails, setCartItemDetails] = useState<ProductKeyValueInterface>({});

  const hasProductInCart = (id: string): boolean => {
    const hasInCart = cart.products.find(({ productId }) => productId === id)
    return Boolean(hasInCart);
  };

  const addItem = async (productId: string) => {
    const { success, data } = await graphqlService(CartItemAddMutation.params.text, { productId });
    if (success) {
      setCart({ ...(data as CartInterface) });
    }
  };

  const removeItem = async (id: string) => {
    const { success, data } = await graphqlService(CartItemRemoveQuery.params.text, { productId: id });
    if (success) {
      setCart({ ...(data as CartInterface) });
    }
  }

  const loadCartItemsDetails = async () => {
    try {
      const idList = cart.products.map(({ productId }) => productId);
      const { success, data } = await graphqlService(ProductsFilterQuery.params.text, { idList });
      if (success) {
        const productKeyValue: ProductKeyValueInterface = {};
        (data as Array<ProductInterface>).forEach((product: ProductInterface) => {
          productKeyValue[product._id] = product
        });
        setCartItemDetails({ ...productKeyValue });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const updateCartItemQuantity = async (id: string, quantity: number) => {
    const variables = { productId: id, quantity };
    const { success, data } = await graphqlService(CartItemUpdateQuantityMutation.params.text, variables);
    if (success) {
      setCartItemDetails({ ...(data as ProductKeyValueInterface) });
    }
  }

  const clearCart = (): void => {
    setCart(cartInitialState);
  }

  const totalCartItems = (): number => cart.quantity;

  const isCartEmpty = () => totalCartItems() === 0;

  const loadCart = async () => {
    const { success, data } = await graphqlService(CartActiveQuery.params.text, {});
    if (success) {
      setCart({ ...(data as CartInterface) });
    }
  }

  const totalAmountCartItems = (): number => {
    let totalAmount = 0;
    for (const cartItem of cart.products) {
      totalAmount += cartItem.price * cartItem.quantity;
    }

    return totalAmount;
  };

  const getCreditCard = (cardName: CreditCardInputOption) => (CREDIT_CARD[cardName] as CreditCardInterface);

  const makeCheckout = async (payment: CreditCardInputOption) => {
    const { success, data } = await graphqlService(CartCheckoutMutation.params.text, getCreditCard(payment));
    console.log('data', data);
    if (success) {
      // setCartItemDetails({ ...(data as ProductKeyValueInterface) });
    }
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
        // cartItemsArray,
        totalCartItems,
        isCartEmpty,
        // itemHasAvailableQuantity,
        // itemHasAvailableQuantityToAddCart,
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

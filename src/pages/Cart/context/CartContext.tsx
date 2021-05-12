import React, { createContext, useState, FC } from 'react';
import { CartInterface } from '../CartInterface';
import { ProductInterface, ProductKeyValueInterface } from '../../Products/ProductInterface';
import { CartContextInterface } from './CartContextInterfaces';
import graphqlService from '../../../services/graphqlService';
import CartItemAddMutation from '../__generated__/cartItemAddMutation.graphql';
import CartItemRemoveQuery from '../__generated__/cartItemRemoveQuery.graphql';
import CartItemUpdateQuantityMutation from '../__generated__/cartItemUpdateQuantityMutation.graphql';
import CartActiveQuery from '../__generated__/cartActiveQuery.graphql';
import ProductsFilterQuery from '../../Products/__generated__/productsFilterQuery.graphql';

const cartInitialState = {
  total: 0.00,
  status: 'Active',
  quantity: 0,
  products: [],
};

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

export const CartProvider: FC = (props: React.PropsWithChildren<React.ReactNode>) => {
  const [cart, setCart] = useState<CartInterface>(cartInitialState as CartInterface);
  const [cartItemDetails, setCartItemDetails] = useState<ProductKeyValueInterface>({});

  const hasProductInCart = (id: string): boolean => {
    const hasInCart = cart.products.find(({ _id }) => _id === id)
    return Boolean(hasInCart);
  };

  const addItem = async (productId: string) => {
    try {
      const graphqlResponse = await graphqlService(CartItemAddMutation.params.text, { productId });
      setCart({ ...graphqlResponse.data.addCartItem });
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async (id: string) => {
    try {
      const graphqlResponse = await graphqlService(CartItemRemoveQuery.params.text, { productId: id });
      console.log('[graphqlResponse.data.removeCartItem]', graphqlResponse.data);
      // setCart({ ...graphqlResponse.data.removeCartItem });
    } catch (error) {
      console.error(error);
    }
  }

  const loadCartItemsDetails = async () => {
    try {
      const idList = cart.products.map(({ _id }) => _id);
      const graphqlResponse = await graphqlService(ProductsFilterQuery.params.text, { idList });

      const productKeyValue: ProductKeyValueInterface = {};
      graphqlResponse.data.productsFilter.forEach((product: ProductInterface) => {
        productKeyValue[product._id] = product
      });
      setCartItemDetails({ ...productKeyValue });
    } catch (error) {
      console.error(error);
    }
  }

  const updateCartItemQuantity = async (id: string, quantity: number) => {
    try {
      const variables = { productId: id, quantity };
      const graphqlResponse = await graphqlService(CartItemUpdateQuantityMutation.params.text, variables);
      console.log('[graphqlResponse]', graphqlResponse.data);
      setCartItemDetails({ ...graphqlResponse.data.updateCartItemQuantity });
    } catch (error) {
      console.error(error);
    }
  }

  const clearCart = (): void => {
    setCart(cartInitialState);
  }

  const totalCartItems = (): number => cart.quantity;

  const isCartEmpty = () => totalCartItems() === 0;

  const loadCart = async () => {
    try {
      const graphqlResponse = await graphqlService(CartActiveQuery.params.text, {});
      console.log('[graphqlResponse]', graphqlResponse);
      if (graphqlResponse.data.activeCart) {
        setCart({ ...graphqlResponse.data.activeCart });
      }
    } catch (error) {
      console.error(error);
    }
  }

  // const cartItemsArray = (): CartItem[] => Object.values(cartItems);

  const totalAmountCartItems = (): number => {
    let totalAmount = 0;
    for (const cartItem of cart.products) {
      totalAmount += cartItem.price * cartItem.quantity;
    }

    return totalAmount;
  };

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
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

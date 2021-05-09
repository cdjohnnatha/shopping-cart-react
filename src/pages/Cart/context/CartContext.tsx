import React, { createContext, useState, FC } from 'react';
import { ProductInterface } from '../../Products/ProductInterface';
import { CartContextInterface, CartItemsInterface, CartItem } from './CartContextInterfaces';



const cartInitialState = {};

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface);


export const CartProvider: FC = (props: React.PropsWithChildren<React.ReactNode>) => {
  const [cartItems, setCartItems] = useState<CartItemsInterface>(cartInitialState);

  const hasProductInCart = (id: string): boolean => Boolean(cartItems[id]);

  const itemHasAvailableQuantity = (product: CartItem): boolean => product.quantityAvailable > 0;

  const itemHasAvailableQuantityToAddCart = (product: CartItem): boolean => {
    let hasQuantityAvailableToAddCart = itemHasAvailableQuantity(product);
    if (hasQuantityAvailableToAddCart) {
      const { quantityAvailable, quantity } = product;
      hasQuantityAvailableToAddCart = (quantityAvailable - quantity) >= 0;
    }

    return hasQuantityAvailableToAddCart;
  }

  const addItem = (product: ProductInterface): void => {

    if (hasProductInCart(product._id)) {
      cartItems[product._id].quantity++;
    } else {
      cartItems[product._id] = {
        ...product,
        quantity: 1,
      }
    }

    if (itemHasAvailableQuantityToAddCart(cartItems[product._id])) {
      setCartItems({ ...cartItems });
    } else {
      /**@Todo create common message center */
      window.alert('It has not available quantity to add in cart');
      console.warn('It has not available quantity to add in cart');
    }
  };

  const removeItem = (id: string): void => {
    delete cartItems[id];
    setCartItems({ ...cartItems });
  }

  const clearCart = (): void => {
    setCartItems(cartInitialState);
  }

  const totalCartItems = (): number => Object.keys(cartItems).length;

  const isCartEmpty = () => totalCartItems() === 0;

  return (
    <CartContext.Provider
      value={{
        removeItem,
        addItem,
        clearCart,
        hasProductInCart,
        cartItems,
        totalCartItems,
        isCartEmpty,
        itemHasAvailableQuantity,
        itemHasAvailableQuantityToAddCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

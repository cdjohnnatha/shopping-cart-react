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
      cartItems[product._id].quantityAvailable--;
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

  const updateCartItemQuantity = (id: string, quantity: number) => {
    cartItems[id].quantity = quantity;
    if (itemHasAvailableQuantityToAddCart(cartItems[id])) {
      setCartItems({ ...cartItems });
    } else {
      /**@Todo create common message center */
      window.alert('It has not available quantity to add in cart');
      console.warn('It has not available quantity to add in cart');
    }
  }

  const clearCart = (): void => {
    setCartItems(cartInitialState);
  }

  const totalCartItems = (): number => Object.keys(cartItems).length;

  const isCartEmpty = () => totalCartItems() === 0;

  const cartItemsArray = (): CartItem[] => Object.values(cartItems);

  const totalAmountCartItems = (): number => {
    let totalAmount = 0;
    for (const cartId in cartItems) {
      totalAmount += cartItems[cartId].price * cartItems[cartId].quantity;
    }

    return totalAmount;
  };

  return (
    <CartContext.Provider
      value={{
        removeItem,
        addItem,
        clearCart,
        hasProductInCart,
        cartItemsArray,
        totalCartItems,
        isCartEmpty,
        itemHasAvailableQuantity,
        itemHasAvailableQuantityToAddCart,
        updateCartItemQuantity,
        totalAmountCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

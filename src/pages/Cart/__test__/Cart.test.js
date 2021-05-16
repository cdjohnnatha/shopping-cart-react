import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

import Cart from '../../Cart/Cart';
import ProductsMock from '../../Products/__mock__/products.mock';
import { CartProvider } from '../../Cart/context/CartContext';
import { NotificationProvider } from '../../../layout/Notifications/NotificationContext';

let container = null;
let productsMockData = null;

describe('Cart ', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    productsMockData = {
      data: {
        productsPaginated: {
          pagination: {
            totalPages: 1,
            totalValues: 8,
            rowsPerPage: 10,
            currentPage: 0
          },
          products: ProductsMock.products,
        }
      }
    }
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Render empty cart view", async () => {
   
    act(() => {
      const component = (
        <NotificationProvider>
          <CartProvider>
            <Cart />
          </CartProvider>
        </NotificationProvider>
      );
      render(component, container);
    });
    const cartTitle = document.querySelector("h1");

    expect(cartTitle.textContent).toBe('Cart view');
  });
});
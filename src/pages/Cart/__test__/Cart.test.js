import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";

import Cart from '../../Cart/Cart';
import ProductsMock from '../../Products/__mock__/products.mock';
import { CartProvider } from '../../Cart/context/CartContext';

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
    // jest.spyOn(global, "fetch").mockImplementation(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve(productsMockData)
    //   })
    // );
    act(() => {
      const component = (
        <CartProvider>
          <Cart />
        </CartProvider>
      );
      render(component, container);
    });
    const cartTitle = document.querySelector("h1");

    expect(cartTitle.textContent).toBe('Cart view');
  });
});
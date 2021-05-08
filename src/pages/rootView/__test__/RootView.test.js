import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";

import Root from '../../../hoc/Root';
import ProductsMock from '../../../components/products/__mock__/products.mock';

let container = null;
let productsMockData = null;

const renderRouter = (element, container, initialEntires) => render(
  <MemoryRouter initialEntries={initialEntires}>
    {element}
  </MemoryRouter>,
  container
);

describe('RootView ', () => {
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
    productsMockData = {};
  });

  it("Render RootView", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(productsMockData)
      })
    );
    await act(async () => {
      renderRouter(<Root />, container, ['/']);
    });

    // Check correct page content showed up
    const cardElements = document.getElementsByClassName("products-elements");
    const [rowsPerPageInput] = document.getElementsByClassName("MuiSelect-nativeInput");
    expect(cardElements.lenght).toBe(productsMockData.data.productsPaginated.products.lenght);
    expect(parseInt(rowsPerPageInput.value, 10)).toBe(productsMockData.data.productsPaginated.pagination.rowsPerPage);
  });
});
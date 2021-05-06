import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import history from '../../../config/history';

import Root from '../../../hoc/Root';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const renderRouter = (element, container, initialEntires) => render(
  <MemoryRouter initialEntries={initialEntires}>
    {element}
  </MemoryRouter>,
  container
);

describe('Pages navigation', () => {
  it("Index page must exist", async () => {
    act(() => {
      renderRouter(<Root />, container, ['/']);
    });

    // Check correct page content showed up
    const pageTitle = document.querySelector("h1");
    expect(pageTitle.textContent).toBe('Products available');
  });

  test('landing on a bad page', () => {
    history.push('/some/bad/route');
    act(() => {
      render(<Root />, container);
    });
    const pageTitle = document.querySelector("h1");

    expect(pageTitle.textContent).toBe('Not Found');
  });
});
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";

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

// it("Index page must exist", async () => {
//   act(() => {
//     renderRouter(<RootView />, container, ['/']);
//   });

//   // Check correct page content showed up
//   expect(document.body.textContent).toBe('Root view');
// });

it("Should ignore other routes with 404", async () => {
  act(() => {
    renderRouter(<Root />, container, ['/yrdy']);
  });

  // Check correct page content showed up
  console.log('[document.body]', document.body.textContent);
  expect(document.body.textContent).toBe('Not Found');
});
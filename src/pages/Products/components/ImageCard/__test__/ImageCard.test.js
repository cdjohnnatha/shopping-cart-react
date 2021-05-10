import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

import ImageCard from '../ImageCard';
import ProductsMock from '../../../__mock__/products.mock';
import { CartProvider } from '../../../../Cart/context/CartContext';

let container = null;

describe('ImageCard button', () => {

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

  it("Render properly ImageCard button", async () => {
    act(() => {
      const imageCardElement = (
        <CartProvider>
          <ImageCard product={ProductsMock.product} />
        </CartProvider>
      );
      render(imageCardElement, container);
    });
    const {
      _id: productId,
      description,
      name,
      price,
      currency,
      images,
    } = ProductsMock.product;
    const cardContainer = document.querySelector("[data-testid=cardElement]");
    const buttonElement = cardContainer.querySelector('button');
    const cardTitle = cardContainer.querySelector(`#image-card-title-${productId}`);
    const cardDescription = cardContainer.querySelector(`#image-card-description-${productId}`);
    const cardChipPrice = cardContainer.querySelector(`#image-card-price-${productId}`);
    const [image] = images.filter((image) => image.type === 'LIST');
    const imageElement = cardContainer.querySelector('img');
    expect(buttonElement.textContent).toBe('Add to cart');
    expect(cardTitle.textContent).toBe(name);
    expect(cardChipPrice.textContent).toBe(`${currency.label}: ${price}`);
    expect(cardDescription.textContent).toBe(description);
    expect(imageElement.src).toContain(image.path);

    act(() => {
      // const { totalCartItems } = useContext(CartContext);
      buttonElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      // expect(totalCartItems()).toBe(1);
    });
    expect(buttonElement.textContent).toBe('Remove from cart');

  });
});
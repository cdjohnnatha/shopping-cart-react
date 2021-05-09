import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

import ImageCard from '../ImageCard';

let container = null;
let onChange = null;

describe('ImageCard button', () => {

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    onChange = jest.fn();
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    onChange = null;
  });

  it("Render properly ImageCard button", async () => {
    act(() => {
      const imageCardElement = (
        <ImageCard
          title="sample"
          description="some description"
          onButtonClickHandler={onChange}
          price={100.00}
          imageProps={{
            imagePath: "someGuitarImage.png"
          }}
        />
      );
      render(imageCardElement, container);
    });
    const cardContainer = document.querySelector("[data-testid=cardElement]");
    const buttonElement = cardContainer.querySelector('button');
    const cardBodyElement = cardContainer.querySelector('div');
    const spanElement = cardContainer.querySelector('span');
    const imageElement = cardContainer.querySelector('img');
    // Check correct page content showed up
    expect(buttonElement.textContent).toBe('Add to cart');
    expect(cardBodyElement.textContent).toBe('samplesome description');
    expect(spanElement.textContent).toBe('R$: 100.00');
    expect(imageElement.src).toContain('someGuitarImage.png');

    act(() => {
      buttonElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("Render different button label", async () => {
    act(() => {
      const imageCardElement = (
        <ImageCard
          title="sample"
          description="some description"
          onButtonClickHandler={onChange}
          buttonLabel="remove Item"
          price={100.00}
          imageProps={{
            imagePath: "someGuitarImage.png"
          }}
        />
      );
      render(imageCardElement, container);
    });
    const cardContainer = document.querySelector("[data-testid=cardElement]");
    const buttonElement = cardContainer.querySelector('button');
    const cardBodyElement = cardContainer.querySelector('div');
    const spanElement = cardContainer.querySelector('span');
    const imageElement = cardContainer.querySelector('img');

    expect(buttonElement.textContent).toBe('remove Item');
    expect(cardBodyElement.textContent).toBe('samplesome description');
    expect(spanElement.textContent).toBe('R$: 100.00');
    expect(imageElement.src).toContain('someGuitarImage.png');

    act(() => {
      buttonElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
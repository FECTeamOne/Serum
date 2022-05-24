import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Carousel from 'App/Carousel.jsx';

describe('Carousel', () => {

  const range = (start, end) => (
    Array(end - start + 1).fill().map((_, i) => i + start)
  );

  const numbers = range(0, 9);
  const size = 4;

  const getScreenItems = () => {
    const screenItems = [];
    numbers.forEach(i => {
      const screenItem = screen.queryByText(new RegExp(`^${i}$`));
      if (screenItem) {
        screenItems.push(screenItem);
      }
    });
    return screenItems;
  };

  const checkScreenItems = (bounds) => {
    numbers.forEach(i => {
      const screenItem = screen.queryByText(new RegExp(`^${i}$`));
      if (bounds.includes(i)) {
        expect(screenItem).toBeVisible();
      } else {
        expect(screenItem).toBeNull();
      }
    });
  };

  beforeEach(() => {
    const items = numbers.map(i => (
      <div key={i}>{i}</div>
    ));

    render(
      <Carousel items={items} size={size} />
    );
  });

  it('should show the correct number of items', () => {
    let screenItems = getScreenItems();
    expect(screenItems.length).toEqual(size);
  });

  it('should scroll on button presses', () => {
    const backButton = screen.getByText('<');
    const forwardButton = screen.getByText('>');

    fireEvent.click(forwardButton);
    checkScreenItems(range(size, 2 * size - 1));

    fireEvent.click(backButton);
    checkScreenItems(range(0, size - 1));
  });
});

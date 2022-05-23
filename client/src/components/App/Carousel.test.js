import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Carousel from 'App/Carousel.jsx';

describe('Carousel', () => {

  it('should show the correct number of items', () => {
    const numbers = Array(10).fill().map((_, i) => i);
    const items = numbers.map(i => (
      <div key={i}>{i}</div>
    ));
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
    }

    render(
      <Carousel items={items} size={size} />
    );

    let screenItems = getScreenItems();
    expect(screenItems.length).toEqual(size);
  });

  it('should scroll on button presses', () => {
  });
});

import { screen } from '@testing-library/react';
import AddToCart from 'Overview/AddToCart.jsx';

describe('AddToCart', () => {
  describe('Size selector', () => {
    it('should only show sizes that are in stock for the selected style', () => {
      const skus = {
        37: {
          quantity: 8,
          size: 'XS',
        },
        38: {
          quantity: 0,
          size: 'S',
        },
        39: {
          quantity: 17,
          size: 'M',
        },
      };

      render(<AddToCart skus={skus} />);

      const sizeSelector = screen.getByLabelText('Select size');
      expect(getAllByRole(sizeSelector, 'option').length).toBe(2);

      expect(screen.getByRole('option', { name : 'XS' })).toBeInTheDocument();
      expect(screen.queryByRole('option', { name : 'S' })).not.toBeInTheDocument();
      expect(screen.getByRole('option', { name : 'M' })).toBeInTheDocument();
    });

    it.todo('should show "Select Size" by default');
    it.todo('should become inactive and read "OUT OF STOCK" if there is no stock');
  });

  describe('Quantity selector', () => {
    it.todo('should be disabled and display "-" if a size has not been selected');
    it.todo('should default to 1 once a size has been selected');
    it.todo('should have a maximum set by the quantity of the style + size in stock, up to 15');
    it.todo('should show quantities ranging from 1 to the maximum');
  });

  describe('Add to Cart button', () => {
    it.todo('should display "Please select size" above the size selector if no size has been selected');
    it.todo('should be hidden if there is no stock');
    it.todo('should add the product to cart if size and quantity are valid');
  });
});

import { screen } from '@testing-library/react';
import AddToCart from 'Overview/AddToCart.jsx';

describe('AddToCart', () => {
  describe('Size selector', () => {
    it.todo('should show "Select Size" by default');
    it.todo('should only show sizes that are in stock for the selected style');
    it.todo('should become inactive and read "OUT OF STOCK" if there is no stock');
  });

  describe('Quantity selector' () => {
    it.todo('should be disabled and display "-" if a size has not been selected');
    it.todo('should default to 1 once a size has been selected');
    it.todo('should have a maximum set by the quantity of the style + size in stock, up to 15');
    it.todo('should show quantities ranging from 1 to the maximum');
  });

  describe('Add to Cart button', () => {
    it.todo('should display "Please select size" about the Size selector if no size has been selected');
    it.todo('should be hidden if there is no stock');
    it.todo('should add the product to cart if size and quantity are valid');
  });
});

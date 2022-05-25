import { screen } from '@testing-library/react';
import RelatedItemsList from 'RelatedItems/RelatedItemsList.jsx';

describe('RelatedItems', () => {
  it('should have the related products title display on the screen', () => {
    render(<RelatedItemsList />);

    let node = screen.getByText('RELATED PRODUCTS');
    expect(node).toHaveTextContent('RELATED PRODUCTS');
  });
});

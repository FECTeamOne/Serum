import { screen } from '@testing-library/react';
import ProductInformation from 'Overview/ProductInformation.jsx';

describe('ProductInformation', () => {
  it('should show the price for the selected style', () => {
    const styles = testData.styles.results;

    const { rerender } = render(<ProductInformation
      product={testData.product}
      selectedStyle={styles.find((style) => style.style_id === 1)}
    />);

    let node = screen.getByText(/(?<=Style > )(.+?)$/);
    expect(node).toHaveTextContent('Forest Green & Black');

    rerender(<ProductInformation
      product={testData.product}
      selectedStyle={styles.find((style) => style.style_id === 2)}
    />);

    node = screen.getByText(/(?<=Style > )(.+?)$/);
    expect(node).toHaveTextContent('Desert Brown & Tan');
  });

  it.todo('should not the sale price if the item is not on sale');
  it.todo('should show the sale price if the item is on sale');
});

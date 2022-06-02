import { screen } from '@testing-library/react';
import ProductInformation from 'Overview/ProductInformation.jsx';

describe('ProductInformation', () => {
  it('should show the price for the selected style', () => {
    const styles = testData.styles.results;

    const { rerender } = render(<ProductInformation
      product={testData.product}
      selectedStyle={styles.find((style) => style.style_id === 1)}
    />);

    expect(screen.getByText('Forest Green & Black')).toBeInTheDocument();
    expect(screen.queryByText('Desert Brown & Tan')).not.toBeInTheDocument();

    rerender(<ProductInformation
      product={testData.product}
      selectedStyle={styles.find((style) => style.style_id === 2)}
    />);

    expect(screen.queryByText('Forest Green & Black')).not.toBeInTheDocument();
    expect(screen.getByText('Desert Brown & Tan')).toBeInTheDocument();
  });

  it.todo('should not the sale price if the item is not on sale');
  it.todo('should show the sale price if the item is on sale');
});

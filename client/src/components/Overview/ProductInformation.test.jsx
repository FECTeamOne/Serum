import { screen } from '@testing-library/react';
import ProductInformation from 'Overview/ProductInformation.jsx';

describe('ProductInformation', () => {
  it('should show the price for the selected style', () => {
    const { rerender } = render(<ProductInformation
      product={testData.product}
      styles={testData.styles.results}
      selectedStyleId={1}
      handleStyleSelect={() => {}}
    />);

    let node = screen.getByText(/(?<=Style > )(.+?)$/);
    expect(node).toHaveTextContent('Forest Green & Black');

    rerender(<ProductInformation
      product={testData.product}
      styles={testData.styles.results}
      selectedStyleId={2}
      handleStyleSelect={() => {}}
    />);

    node = screen.getByText(/(?<=Style > )(.+?)$/);
    expect(node).toHaveTextContent('Desert Brown & Tan');
  });

  it.todo('should not the sale price if the item is not on sale');
  it.todo('should show the sale price if the item is on sale');
});

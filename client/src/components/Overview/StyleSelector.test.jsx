import { screen } from '@testing-library/react';
import StyleSelector from 'Overview/StyleSelector.jsx';

describe('StyleSelector', () => {
  it('should change selected style when a thumbnail is clicked', async () => {
    const user = userEvent.setup();
    let selectedStyleId = 1;

    render(<StyleSelector
      styles={testData.styles.results}
      selectedStyleId={selectedStyleId}
      handleStyleSelect={(styleId) => { selectedStyleId = styleId; }}
    />);

    await user.click(screen.getByRole('button', { name: /Desert Brown & Tan/i }));

    const selectedStyle = Object.values(testData.styles.results)
      .find(styleObj => styleObj.style_id === selectedStyleId)
      .name;

    expect(selectedStyle).toBe('Desert Brown & Tan');
  });

  it.todo('should show all styles for a product');
  it.todo('should not change style when the currently selected style thumbnail is clicked');
  it.todo('should indicate the selected style with an overlay');
});

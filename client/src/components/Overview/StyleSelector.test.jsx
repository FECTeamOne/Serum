import { screen } from '@testing-library/react';
import StyleSelector from 'Overview/StyleSelector.jsx';

describe('StyleSelector', () => {
  it('should change selected style when a thumbnail is clicked', async () => {
    const user = userEvent.setup();
    const handleStyleSelect = (styleId) => {
      selectedStyleId = styleId;
    };
    let selectedStyleId = 1;

    const {rerender} = render(<StyleSelector
      styles={testData.styles.results}
      selectedStyleId={selectedStyleId}
      handleStyleSelect={handleStyleSelect}
    />);

    //TODO: might need to be more specific as thumbnails get added to imageGallery
    const style = 'Desert Brown & Tan';
    await user.click(screen.getByAltText(new RegExp(style)));

    const selectedStyleObj = Object.values(testData.styles.results)
      .find(styleObj => styleObj.style_id === selectedStyleId);
    const selectedStyle = selectedStyleObj.name;

    expect(selectedStyle).toBe(style);
  });

  it.todo('should show all styles for a product');
  it.todo('should not change style when the currently selected style thumbnail is clicked');
  it.todo('should indicate the selected style with an overlay');
});

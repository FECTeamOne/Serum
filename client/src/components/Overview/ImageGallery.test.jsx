import { screen } from '@testing-library/react';
import ImageGallery from 'Overview/ImageGallery.jsx';

describe('ImageGallery', () => {
  describe('Default View', () => {
    it('should show the first image in the set by default', () => {
      render(<ImageGallery photos={testData.styles.results[0].photos} />);

      expect(screen.getByRole('button', { name: 'Current style 0' })).toBeVisible();
      expect(screen.queryByRole('button', { name: 'Current style 1' })).not.toBeInTheDocument();
    });

    it.todo('should display up to 7 thumbnails');
    it.todo('should change the cursor to a magnifying glass on hover over the image (excluding the left/right arrows)');
    it.todo('should switch to expanded view when the image is clicked');
    it.todo('should preserve index of the current image selection on style change');
    it.todo('should change the main image when a thumbnail is clicked');
    it.todo('should highlight the thumbnail of the currently image selection');
    it.todo('should not change the image when the currently selected thumbnail is clicked');
    it.todo('should scroll the thumbnail list if navigating the main image carousel yields a thumbnail that is not visible');
  });

  describe('Expanded View', () => {
  });
});

import { screen } from '@testing-library/react';
import Fit from 'Reviews/components/Fit.jsx';

describe('Fit', () => {
  test('Should display any characteristics in the data', async () => {
    render(<Fit reviewsMetadata={testData.reviewsMetadata} />);

    expect(screen.getByText('Size')).toBeInTheDocument();
    expect(screen.getByText('Width')).toBeInTheDocument();
    expect(screen.getByText('Comfort')).toBeInTheDocument();
  });
});

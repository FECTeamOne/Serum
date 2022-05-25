import { screen } from '@testing-library/react';
import Fit from 'Reviews/components/Fit.jsx';
import { reviewsMetadata } from 'tests/testData.js'

describe('Fit', () => {
  test('Should display any characteristics in the data', async () => {
    render(<Fit reviewsMetadata={reviewsMetadata} />);

    expect(screen.getByText('Size').toExist);
    expect(screen.getByText('Width').toExist);
    expect(screen.getByText('Comfort').toExist);
  });
});

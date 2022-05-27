import { screen } from '@testing-library/react';
import Review from 'Reviews/components/Review.jsx';

describe('Review', () => {
  test('Should display a review', async () => {
    const user = userEvent.setup();
    render(<Review review={testData.reviews.results[0]} />);

    await user.click(screen.getByText('Report', { exact: false }));
<<<<<<< HEAD
    await user.click(screen.getByText('Helpful', { exact: false }));

    expect(screen.getByText('Report', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Helpful', { exact: false })).toBeDisabled();
=======

    expect(screen.getByText('Report', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Helpful', { exact: false })).toBeInTheDocument();
>>>>>>> main
    expect(screen.getByText('Comfortable', { exact: false })).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

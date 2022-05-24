import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ReviewList from 'Reviews/components/ReviewList.jsx';

describe('test', () => {
  test('Ratings & Reviews', async () => {
    const user = userEvent.setup();
    render(<ReviewList />);

    await user.click(screen.getByText('More reviews'));

    expect(screen.getByText('More reviews')).not.toBeDisabled();
  });
  test('Ratings & Reviews helpful', async () => {
    const user = userEvent.setup();
    render(<ReviewList />);

    await user.click(screen.getAllByText('| Report')[0]);
    await user.click(screen.getAllByText('| Report')[1]);

    expect(screen.getAllByText('| Report')[0]).not.toBeDisabled();
    expect(screen.getAllByText('| Report')[1]).not.toBeDisabled();
  });
})

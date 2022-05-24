import { screen } from '@testing-library/react';
import ReviewList from 'Reviews/components/ReviewList.jsx';

describe('ReviewList', () => {
  test('The more reviews button should exist', async () => {
    const user = userEvent.setup();
    render(<ReviewList />);

    await user.click(screen.getByText('More reviews'));

    expect(screen.getByText('More reviews')).not.toBeDisabled();
  });
  test('The helpful button should exist', async () => {
    const user = userEvent.setup();
    render(<ReviewList />);

    await user.click(screen.getAllByText('| Report')[0]);
    await user.click(screen.getAllByText('| Report')[1]);

    expect(screen.getAllByText('| Report')[0]).not.toBeDisabled();
    expect(screen.getAllByText('| Report')[1]).not.toBeDisabled();
  });
})

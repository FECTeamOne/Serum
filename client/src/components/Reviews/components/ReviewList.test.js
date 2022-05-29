import { screen } from '@testing-library/react';
import ReviewList from 'Reviews/components/ReviewList.jsx';

xdescribe('ReviewList', () => {
  xtest('The more reviews button should exist', async () => {
    const user = userEvent.setup();
    console.log(testData.reviewsMetadata.product_id);
    render(<ReviewList reviewsMetadata={testData.reviewsMetadata} />);

    await user.click(screen.getByText('More reviews'));

    expect(screen.getByText('More reviews')).not.toBeDisabled();
  });
  xtest('The helpful button should exist', async () => {
    const user = userEvent.setup();
    render(<ReviewList reviewsMetadata={testData.reviewsMetadata} />);

    await user.click(screen.getAllByText('| Report')[0]);
    await user.click(screen.getAllByText('| Report')[1]);

    expect(screen.getAllByText('| Report')[0]).not.toBeDisabled();
    expect(screen.getAllByText('| Report')[1]).not.toBeDisabled();
  });
})

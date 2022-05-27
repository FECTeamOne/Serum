import { screen, fireEvent } from '@testing-library/react';
import AddReview from 'Reviews/components/AddReview.jsx';

describe('Add Review', () => {
  test('It should have feilds to fill in', async () => {
    const user = userEvent.setup();
    render(<AddReview allCharacteristics={testData.reviewsMetadata.characteristics} />);

    await user.click(screen.getByText('yes', { exact: false }));
    await fireEvent.keyDown(screen.getByPlaceholderText('Why did you like the product or not?'), { key: 'A', code: 'KeyA' });

    expect(screen.getByText('Review', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Minimum required characters', { exact: false })).toBeInTheDocument();
    expect(screen.getAllByRole('textbox').length).toBe(4);
  });
  test('It should have radio buttons that change text after click', async () => {
    const user = userEvent.setup();
    const handleModalToggle = jest.fn();
    render(<AddReview
      handleModalToggle={handleModalToggle}
      allCharacteristics={testData.reviewsMetadata.characteristics}
    />);

    await user.click(screen.getAllByText('1', { exact: false })[0]);
    await user.click(screen.getAllByText('2', { exact: false })[1]);
    await user.click(screen.getAllByText('3', { exact: false })[2]);
    await user.click(screen.getAllByRole('button')[0]);

    expect(screen.getByText('Comfort', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Ok', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('A size too small', { exact: false })).toBeInTheDocument();
    expect(handleModalToggle).toHaveBeenCalledTimes(1);
  });
});

import { screen } from '@testing-library/react';
import Stars from 'shared/Stars.jsx';

describe('Stars', () => {
  it('should report the correct value when clicked', () => {
    const user = userEvent.setup();

    let starsValue;
    render(<Stars
      value={0}
      interactive={true}
      onChange={(event) => { starsValue = event.currentTarget.value; }}
      label="test"
    />);

    const starValues = [1, 2, 3, 4, 5];
    starValues.forEach(async (starValue) => {
      await user.click(screen.getByLabelText(new RegExp(starValue)));
      expect(starsValue).toBe(starValue);
    });
  });
});

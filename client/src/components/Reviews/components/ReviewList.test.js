import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import App from '../../App/App.jsx';

descrbe('test', () => {
  test('Ratings & Reviews', async () => {
    render(<App />);

    expect(screen.getByRole('button')).not.toBeDisabled();
  });
})

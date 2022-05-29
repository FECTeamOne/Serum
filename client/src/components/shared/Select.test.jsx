import { screen } from '@testing-library/react';
import Select from 'shared/Select.jsx';

describe('Select', () => {
  it('should display the correct number of options', () => {
    const options = [0, 1, 2, 3, 4];
    render(<Select 
      value={0}
      onChange={() => {}}
      label={"Select options test"}
      options={options}
    />);

    expect(screen.getAllByRole('option').length).toBe(5);
  });
  it('should have the provided options', () => {
    const user = userEvent.setup();
    const options = [0, 1, 2, 3, 4];
    render(<Select 
      value={0}
      onChange={() => {}}
      label={"Select options test"}
      options={options}
    />);

    options.forEach(async (option) => {
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: option }),
      );
      expect(screen.getByRole('option', { name: option }).selected).toBe(true);
    });
  });
  it
  it.todo('show the prompt by default if provided');
  it.todo('should be disabled when requested');
});

import { screen } from '@testing-library/react';
import Carousel from 'shared/Carousel.jsx';

describe('Carousel', () => {
  const range = (start, end) => (
    Array(end - start + 1).fill().map((_, i) => i + start)
  );

  it('should show the correct number of items', () => {
    const numbers = range(0, 9);

    render(
      <Carousel
        items={numbers.map((i) => (
          <div key={i}>{i}</div>
        ))}
        label="test"
        size={4}
        scrollIndex={0}
        onScroll={() => {}}
      />
    );

    numbers.forEach((i) => {
      const carouselItem = screen.queryByText(new RegExp(`^${i}$`));
      if (i >= 0 && i < 4) {
        expect(carouselItem).toBeVisible();
      } else {
        expect(carouselItem).not.toBeVisible();
      }
    });
  });

  it('should not show the back button at the beginning of the carousel', () => {
    const numbers = range(0, 5);

    render(
      <Carousel
        items={numbers.map((i) => (
          <div key={i}>{i}</div>
        ))}
        label="test"
        size={4}
        scrollIndex={0}
        onScroll={() => {}}
      />
    );

    expect(screen.getByLabelText(/back/i)).not.toBeVisible();
    expect(screen.getByRole('button', { name: /forward/i })).toBeVisible();
  });

  it('should not show the forward button at the beginning of the carousel', () => {
    const numbers = range(0, 5);

    render(
      <Carousel
        items={numbers.map((i) => (
          <div key={i}>{i}</div>
        ))}
        label="test"
        size={4}
        scrollIndex={2}
        onScroll={() => {}}
      />
    );

    expect(screen.getByLabelText(/forward/i)).not.toBeVisible();
    expect(screen.getByRole('button', { name: /back/i })).toBeVisible();
  });

  it('should scroll forward on button press', async () => {
    const user = userEvent.setup();
    const numbers = range(0, 9);
    let scrollIndex = 0;

    const { rerender } = render(
      <Carousel
        items={numbers.map((i) => (
          <div key={i}>{i}</div>
        ))}
        label="test"
        size={4}
        scrollIndex={scrollIndex}
        onScroll={(index) => { scrollIndex = index; }}
      />
    );

    await user.click(screen.getByRole('button', { name: /forward/i }));

    rerender(
      <Carousel
        items={numbers.map((i) => (
          <div key={i}>{i}</div>
        ))}
        label="test"
        size={4}
        scrollIndex={scrollIndex}
        onScroll={(index) => { scrollIndex = index; }}
      />
    );

    for (const i of numbers) {
      const carouselItem = screen.queryByText(new RegExp(`^${i}$`));
      if (i >= 4 && i < 8) {
        await waitFor(() => { expect(carouselItem).toBeVisible();});
      } else {
        await waitFor(() => { expect(carouselItem).not.toBeVisible();});
      }
    }
  });

   it('should scroll backward on button press', async () => {
    const user = userEvent.setup();
    const numbers = range(0, 9);
    let scrollIndex = 4;

    const { rerender } = render(
      <Carousel
        items={numbers.map((i) => (
          <div key={i}>{i}</div>
        ))}
        label="test"
        size={4}
        scrollIndex={scrollIndex}
        onScroll={(index) => { scrollIndex = index; }}
      />
    );

    await user.click(screen.getByRole('button', { name: /back/i }));

    rerender(
      <Carousel
        items={numbers.map((i) => (
          <div key={i}>{i}</div>
        ))}
        label="test"
        size={4}
        scrollIndex={scrollIndex}
        onScroll={(index) => { scrollIndex = index; }}
      />
    );

    for (const i of numbers) {
      const carouselItem = screen.queryByText(new RegExp(`^${i}$`));
      if (i >= 0 && i < 4) {
        await waitFor(() => { expect(carouselItem).toBeVisible();});
      } else {
        await waitFor(() => { expect(carouselItem).not.toBeVisible();});
      }
    }
  });


});

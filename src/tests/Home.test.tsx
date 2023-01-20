import { render, screen } from '@testing-library/react';
import Home from '../pages';

describe(`Home`, () => {
  it(`renders a h1 with text "Welcome to the best Pokedex!"`, () => {
    render(<Home />);

    expect(
      screen.getByRole(`heading`, {
        level: 1,
        name: `Welcome to the best Pokedex!`,
      }),
    ).toBeInTheDocument();
  });
});

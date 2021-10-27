import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('test calculator button interactions', () => {
  test('test button interaction to type 88', () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: /8/i });
    userEvent.click(button);
    userEvent.click(button);
    const display = screen.getByText('88');
    return expect(display).toBeInTheDocument;
  });

  test('test button interaction to type 88', () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: /7/i });
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    const display = screen.getByText('777');
    return expect(display).toBeInTheDocument;
  });
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';
import Header from '../components/Header';
import Container from '../components/Container';

describe('Testing Home page', () => {
  test('test h1', () => {
    render(<Home />);
    return expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

describe('Testing Quote page', () => {
  test('test div', () => {
    render(<Quote />);
    return expect(screen.getByTestId('division')).toBeInTheDocument;
  });
});

describe('Testing Calculator page', () => {
  test('test h1', () => {
    render(<Calculator />);
    return expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

describe('Testing Header page', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );
  const span = screen.getByTestId('logo');
  test('test span', () => expect(span).toBeInTheDocument);
  test('test the logo text', () => expect(span.textContent).toBe('Math Magicians'));
});

describe('Testing Quote page', () => {
  test('test div', () => {
    render(<Container />);
    return expect(screen.getByTestId('container')).toBeInTheDocument;
  });
  test('test h1', () => {
    render(<Container />);
    return expect(screen.getByRole('heading').textContent).toBe('Welcome to our page !');
  });
});

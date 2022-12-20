import { render, screen } from '@testing-library/react';
import App from './App';

test('testando se a pagina está renderizando.', () => {
  render(< App />);
  const linkElement = screen.getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});

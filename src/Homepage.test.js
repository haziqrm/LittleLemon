// Main.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

test('renders Reserve a Table button', () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
  const reserveButton = screen.getByRole('button', { name: /reserve/i });
  expect(reserveButton).toBeInTheDocument();
});

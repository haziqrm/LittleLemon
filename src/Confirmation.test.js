// Confirmation.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Confirmation from './components/Confirmation';

test('renders confirmation message', () => {
  render(
    <BrowserRouter>
      <Confirmation />
    </BrowserRouter>
  );

  expect(screen.getByText(/thank you for your reservation/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /go back home/i })).toBeInTheDocument();
});

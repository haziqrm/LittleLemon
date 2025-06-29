// Reserve.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Reserve from './components/Reserve';

test('renders reservation form', () => {
  render(
    <BrowserRouter>
      <Reserve />
    </BrowserRouter>
  );

  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit reservation/i })).toBeInTheDocument();
});

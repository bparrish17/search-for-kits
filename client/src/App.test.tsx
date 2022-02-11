import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('has text field for searching', async () => {
  render(<App />);
  const textFieldElement = screen.getByTestId('search-for-kits-text-field')
  expect(textFieldElement).toBeInTheDocument();
})

test('text field has expected label', async () => {
  render(<App />);
  const textFieldElement = screen.getByLabelText('Search for Kits By Label ID')
  expect(textFieldElement).toBeInTheDocument()
})

test('should display loading spinner by default', async () => {
  render(<App />);
  const loaderElement = screen.getByTestId('loader')
  expect(loaderElement).toBeInTheDocument();
})
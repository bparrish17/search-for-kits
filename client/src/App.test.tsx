import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('has text field for searching', async () => {
  render(<App />);
  const textFieldElement = screen.getByTestId('search-for-kits-text-field')
  expect(textFieldElement).toBeInTheDocument();
})

test('text field has label for searching', async () => {
  render(<App />);
  const textFieldElement = screen.getByTestId('search-for-kits-text-field')
  expect(textFieldElement).toHaveTextContent('Search for Kits by Label')
})

test('should display loading spinner by default', async () => {
  render(<App />);
  const loaderElement = screen.getByTestId('loader')
  expect(loaderElement).toBeInTheDocument();
})
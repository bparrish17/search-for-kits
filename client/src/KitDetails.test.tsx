import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import KitDetails from './KitDetails';

const fakeKit = { id: 123, label_id: '444-4444-44', shipping_tracking_code: '123456'}

test('has card title', async () => {
  render(<KitDetails kit={fakeKit}/>);
  const titleElement = screen.getByText('Kit Details')
  expect(titleElement).toBeInTheDocument()
})

test('displays kit ID', async () => {
  render(<KitDetails kit={fakeKit}/>);
  const idElement = screen.getByText(123)
  expect(idElement).toBeInTheDocument()
})

test('displays kit label id', async () => {
  render(<KitDetails kit={fakeKit}/>);
  const labelIdElement = screen.getByText('444-4444-44')
  expect(labelIdElement).toBeInTheDocument()
})

test('displays kit shippip tracking code', async () => {
  render(<KitDetails kit={fakeKit}/>);
  const trackingCodeElement = screen.getByText('123456')
  expect(trackingCodeElement).toBeInTheDocument()
})
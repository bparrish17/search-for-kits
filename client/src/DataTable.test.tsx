import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';

test('has ID header column', async () => {
  render(<DataTable data={[]}/>);
  const idHeaderElement = screen.getByText('ID')
  expect(idHeaderElement).toBeInTheDocument();
})

test('has Label ID header column', async () => {
  render(<DataTable data={[]}/>);
  const labelIdHeaderElement = screen.getByText('Label ID')
  expect(labelIdHeaderElement).toBeInTheDocument();
})

test('has Tracking Number header column', async () => {
  render(<DataTable data={[]}/>);
  const trackingCodeHeaderElement = screen.getByText('Tracking Code')
  expect(trackingCodeHeaderElement).toBeInTheDocument();
})

test('displays cells from provided data', async () => {
  render(<DataTable data={[{ id: 123, label_id: '444-4444-44', shipping_tracking_code: '123456'}]}/>);
  const idElement = screen.getByText(123)
  const labelIdElement = screen.getByText('444-4444-44')
  const trackingCodeElement = screen.getByText('123456')
  expect(idElement).toBeInTheDocument();
  expect(labelIdElement).toBeInTheDocument();
  expect(trackingCodeElement).toBeInTheDocument();
})
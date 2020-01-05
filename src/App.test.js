import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';

// Very basic tests

test('shows the main banner', () => {
  const app = render(<App />);
  const title = app.getByText("WonderSplenk's Advisor Finder");
  expect(title).toBeInTheDocument();
});

test('waits for the load to happen', async () => {
  const app = render(<App />);
  const label = await waitForElement(() => app.getByText("Alleswetter"));
  expect(label).toBeInTheDocument();
});

test('checks if the filters work', async () => {
  const app = render(<App />);
  fireEvent.click(app.getByTestId("radioOnline"));
  const alleswetter = await waitForElement(() => app.getByText("Alleswetter"));
  expect(alleswetter).toBeInTheDocument();
  expect(app.queryByText("Allesdenker")).toBeFalsy();
});

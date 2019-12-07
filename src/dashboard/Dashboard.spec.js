// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('<Dashboard /> snapshot', () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});

test('Defaults to Unlocked and Open', () => {
  const { getByText } = rtl.render(<Dashboard />);

  expect(getByText(/unlocked/i).textContent).toMatch(/unlocked/i);
  expect(getByText(/open/i).textContent).toMatch(/open/i);
});

test('Shows the controls and display', () => {
  const { getByText } = rtl.render(<Dashboard />);

  expect(getByText(/unlocked/i).textContent).toMatch(/unlocked/i);
  expect(getByText(/open/i).textContent).toMatch(/open/i);
  expect(getByText(/lock gate/i).textContent).toMatch(/lock gate/i);
  expect(getByText(/close gate/i).textContent).toMatch(/close gate/i);
});

test('Cannot be Closed or Opened if it is Locked', () => {
  const wrapper = rtl.render(<Dashboard />);
  const locked = wrapper.queryByText(/unlock gate/i);

  locked && expect(wrapper.getByText(/locked/i).className).toMatch(/red-led/i);
  locked && expect(wrapper.getByText(/closed/i).className).toMatch(/red-led/i);
});

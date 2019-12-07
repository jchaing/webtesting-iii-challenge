// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../dashboard/Dashboard';
import Controls from './Controls';

test('provide buttons to toggle the closed/locked states', () => {
  const wrapper = rtl.render(
    <Dashboard>
      <Controls />
    </Dashboard>
  );
  const lockBtn = wrapper.getByTestId('key');
  const closeBtn = wrapper.getByTestId('entry');

  rtl.act(() => {
    rtl.fireEvent.click(closeBtn);
  });
  expect(closeBtn.textContent).toMatch(/open gate/i);

  rtl.act(() => {
    rtl.fireEvent.click(lockBtn);
  });
  expect(lockBtn.textContent).toMatch(/unlock gate/i);
});

test('Buttons text changes to reflect the state the door will be in if clicked', () => {
  const wrapper = rtl.render(<Controls />);

  const key = wrapper.getByTestId('key');
  const lockBtn = key.getAttribute('disabled');

  lockBtn === false
    ? expect(key.textContent).toMatch(/unlock gate/i)
    : expect(key.textContent).toMatch(/lock gate/i);

  const entry = wrapper.getByTestId('entry');
  const closeBtn = entry.getAttribute('disabled');

  closeBtn === false
    ? expect(entry.textContent).toMatch(/open gate/i)
    : expect(entry.textContent).toMatch(/close gate/i);
});

test('Closed toggle button is disabled if gate is locked', () => {
  const wrapper = rtl.render(
    <Dashboard>
      <Controls />
    </Dashboard>
  );
  const lockBtn = wrapper.getByTestId('key');
  const closeBtn = wrapper.getByTestId('entry');

  rtl.act(() => {
    rtl.fireEvent.click(closeBtn);
  });

  rtl.act(() => {
    rtl.fireEvent.click(lockBtn);
  });

  expect(closeBtn).toBeDisabled();
});

test('Locked toggle buttons is disabled if gate is open', () => {
  const wrapper = rtl.render(
    <Dashboard>
      <Controls />
    </Dashboard>
  );

  const lockBtn = wrapper.getByTestId('key');
  const open = wrapper.getByTestId('open-closed');

  expect(open.textContent).toMatch(/open/i)
  expect(lockBtn).toBeDisabled()
});

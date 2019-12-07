// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('Displays if gate is Open/Closed and if it is Locked/Unlocked', () => {
  const wrapper = rtl.render(<Display />);

  const unlocked_locked = wrapper.getByTestId('unlocked-locked');
  const open_closed = wrapper.getByTestId('open-closed');

  expect(unlocked_locked).toBeInTheDocument()
  expect(open_closed).toBeInTheDocument()
});

test('Displays Closed if closed props is true and Open if otherwise', () => {
  const wrapper = rtl.render(<Display />);
  const closed = wrapper.getByTestId('open-closed')

  closed.classList.contains('red-led') && expect(closed.textContent).toMatch(/closed/i);
  closed.classList.contains('green-led') && expect(closed.textContent).toMatch(/open/i);
})

test('Displays Locked if the locked prop is true and Unlocked if otherwise', () => {
  const wrapper = rtl.render(<Display />);
  const locked = wrapper.getByTestId('unlocked-locked');

  locked.classList.contains('red-led') && expect(locked.textContent).toMatch(/locked/i);
  locked.classList.contains('green-led') && expect(locked.textContent).toMatch(/unlocked/i)
})

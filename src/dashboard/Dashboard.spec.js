// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard'

// defaults to unlocked and open using snapshot
test('<Dashboard /> snapshot', () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper.asFragment()).toMatchSnapshot();
})

// // shows the controls and display
// test('shows the controls and display', () => {
//   const controls = rtl.render(<Controls />);
//   const display = rtl.render(<Display />);



// })

// test('cannot be opened if it is locked', () => {
//   const entry = rtl.render(<Dashboard locked={true} hasKeyCard={false} />);
//   const openButton = entry.getByTestId(/open-button/i);

//   expect(openButton).not.toBeEnabled();
// });

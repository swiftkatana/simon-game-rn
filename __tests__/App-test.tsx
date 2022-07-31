import 'react-native';
import React from 'react';
import App from '../src/App';
import {render} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.

it('The App should match the snapshot', () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});

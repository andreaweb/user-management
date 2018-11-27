import React from 'react';
import ReactDOM from 'react-dom';
import GroupDetails from './GroupDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GroupDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});

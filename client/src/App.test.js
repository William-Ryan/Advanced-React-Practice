import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`Nav title renders correctly`, () => {
  // Arrange

  const { getByText } = render(<App />)

  // Act

  const title = getByText(/Men's Soccer Players - World Ranking/i); 

  // Assert

  expect(title).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

test('it should render Home correctly', () => {
  render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>,
  );
  expect(screen).toMatchSnapshot();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Region from '../components/Region';

test('it should render Region correctly', () => {
  render(
    <Router>
      <Provider store={store}>
        <Region id="Aragon" />
      </Provider>
    </Router>,
  );
  expect(screen).toMatchSnapshot();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import TopBar from '../components/TopBar';

test('it should render TopBar correctly', () => {
  render(
    <Router>
      <Provider store={store}>
        <TopBar />
      </Provider>
    </Router>,
  );
  expect(screen).toMatchSnapshot();
});

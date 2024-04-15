/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// reducers
import loginSlice from '../redux/reducers/sessionReducer';

// component
import LoginForm from './Login';

describe('Login', () => {
  let store;

  beforeEach(() => {
    // Create our Redux store before each test
    store = configureStore({
      reducer: {
        login: loginSlice,
      },
    });
  });

  it('should render the component without crashing', () => {
    render(
      <Router>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </Router>
    );
  });

  it('should render a login form with two input fields', () => {
    // Arrange
    const { getByLabelText } = render(
      <Router>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </Router>
    );

    // Act
    const usernameInput = getByLabelText('Username:');
    const passwordInput = getByLabelText('Password:');

    // Assert
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});

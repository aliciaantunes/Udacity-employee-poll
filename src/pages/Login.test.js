/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';

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
    // Aqui nós conjuramos nossa loja Redux antes de cada teste
    store = configureStore({
      reducer: {
        login: loginSlice,
      },
    });
  });

  it('should render the component without crashing', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

  // Provides a link to the registration page for new users.

  // Renders a login form with two input fields for username and password.
  it('should render a login form with two input fields', () => {
    // Arrange
    const { getByLabelText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    // Act
    const usernameInput = getByLabelText('Username:');
    const passwordInput = getByLabelText('Password:');

    // Assert
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// reducers
import questionsSlice from '../redux/reducers/questionsReducer';
import usersSlice from '../redux/reducers/usersReducer';
import sessionSlice from '../redux/reducers/sessionReducer';

// component
import LoginForm from './NewQuestion';

describe('NewQuestion', () => {
  let store;

  beforeEach(() => {
    // Aqui nós conjuramos nossa loja Redux antes de cada teste
    store = configureStore({
      reducer: {
        questions: questionsSlice,
        users: usersSlice,
        session: sessionSlice,
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

  // Renders a form with two input fields for optionOne and optionTwo
  it('should render a form with two input fields for optionOne and optionTwo', () => {
    // Arrange
    const { getByLabelText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    // Act
    const optionOneInput = getByLabelText('Option One:');
    const optionTwoInput = getByLabelText('Option Two:');

    // Assert
    expect(optionOneInput).toBeInTheDocument();
    expect(optionTwoInput).toBeInTheDocument();
  });

  // Allows the user to input text into the optionOne and optionTwo fields
  it('should allow user to input text into optionOne and optionTwo fields', () => {
    // Arrange
    const { getByLabelText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    // Act
    const optionOneInput = getByLabelText('Option One:');
    const optionTwoInput = getByLabelText('Option Two:');

    fireEvent.change(optionOneInput, { target: { value: 'Option One Text' } });
    fireEvent.change(optionTwoInput, { target: { value: 'Option Two Text' } });

    // Assert
    expect(optionOneInput.value).toBe('Option One Text');
    expect(optionTwoInput.value).toBe('Option Two Text');
  });
});

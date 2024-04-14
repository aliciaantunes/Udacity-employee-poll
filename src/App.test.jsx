import React from 'react';
import { render, screen } from '@testing-library/react';

// redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// reducers
import questionsSlice from './redux/reducers/questionsReducer';
import usersSlice from './redux/reducers/usersReducer';

// component
import App from './App';

describe('App', () => {
  let store;

  beforeEach(() => {
    // Aqui nós conjuramos nossa loja Redux antes de cada teste
    store = configureStore({
      reducer: {
        questions: questionsSlice,
        users: usersSlice,
      },
    });
  });

  it('should render the component without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should display an empty list of questions when there are no questions in the store', () => {
    const initialState = { questions: [] };
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { initialState }
    );

    const questionList = screen.getByRole('list');
    expect(questionList.children.length).toBe(0);
  });
  it('should display an empty list of questions when there are no questions in the store', () => {
    const initialState = { questions: [] };
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { initialState }
    );

    const questionList = screen.getByRole('list');
    expect(questionList.children.length).toBe(0);
  });

  describe('App component', () => {
    it('should match the snapshot', () => {
      const { asFragment } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});

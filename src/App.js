/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuestionsHandler,
  addQuestionHandler,
} from './redux/action-handlers/questionsActions';
import { getUsersHandler } from './redux/action-handlers/userActions';

// Redux flow:
// 1. User click in the button to fetch
// 2. The fetchQuestions function is called
// 3. The fetchQuestions function dispatch the getQuestionsHandler action
// 4. The getQuestionsHandler fetch the data from the Fake API
// 5. The getQuestionsHandler dispatch the reducer with the data
// 6. The reducer update the state with the new data
// 7. The useSelector hook get the new data from the state

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleOptionOneChange = (e) => {
    setOptionOne(e.target.value);
  };

  const handleOptionTwoChange = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleSubmit = () => {
    const question = {
      user: 'tylermcginnis',
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    };

    dispatch(addQuestionHandler(question));

    setOptionOne('');
    setOptionTwo('');
  };

  const fetchQuestions = () => {
    dispatch(getQuestionsHandler());
  };

  const fetchUsers = () => {
    dispatch(getUsersHandler());
  };

  const newAnswer = () => {
    const answer = {
      authedUser: 'alicia',
      qid: 'am8ehyc8byjqgar0jgpub9',
      answer: 'optionTwo',
    };

    dispatch(addQuestionHandler(answer));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          type="button"
          onClick={fetchQuestions}
        >
          Fetch Questions
        </button>
        <button
          type="button"
          onClick={fetchUsers}
        >
          Fetch Users
        </button>
        <button
          type="button"
          onClick={newAnswer}
        >
          new Answer
        </button>
        <input
          type="text"
          value={optionOne}
          onChange={handleOptionOneChange}
        />
        <input
          type="text"
          value={optionTwo}
          onChange={handleOptionTwoChange}
        />
        <button
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              {question.optionOne.text}
              <br />
              {question.optionTwo.text}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

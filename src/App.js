import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsHandler, getUsersHandler } from './redux/action-handlers/questionsActions';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);
  const users = useSelector(state => state.users);

  const fetchQuestions = () => {
    console.log('Fetching questions...');
    dispatch(getQuestionsHandler());
  };

  const fetchUsers = () => {
    console.log('Fetching users...');
    dispatch(getUsersHandler());
  };

 console.log('questions:', questions);
 console.log('users:', users);
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={fetchQuestions}>Fetch Questions</button>
      <button onClick={fetchUsers}>Fetch Users</button>
        <ul>
          {questions.map(question => (
            <li key={question.id}>{question.optionOne.text}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

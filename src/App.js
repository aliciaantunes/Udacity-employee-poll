import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsHandler } from './redux/action-handlers/questionsActions';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);

  const fetchQuestions = () => {
    console.log('Fetching questions...');
    dispatch(getQuestionsHandler());
  };


  console.log('questions:', questions);
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={fetchQuestions}>Fetch Questions</button>
        <ul>
          {questions.map(question => (
            <li key={question.id}>{question.optionOne.text}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsHandler } from '../redux/action-handlers/questionsActions';

function Home() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getQuestionsHandler());
  }, [dispatch, questions]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>

        {questions.map((question) => (
          <div>
            <h3>What do you preffer?</h3>
            <ul key={question.id}>
              <li>{question.optionOne.text}</li>
              <li>{question.optionTwo.text}</li>
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
}

export default Home;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsHandler } from '../redux/action-handlers/questionsActions';
import { getUsersHandler } from '../redux/action-handlers/userActions';
import Card from '../components/Card';

function Home() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getQuestionsHandler());
  }, [dispatch]);

  // loop infinito?
  useEffect(() => {
    dispatch(getUsersHandler());
  }, [dispatch]);

  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        {questions.map((question) => (
          <Card
            key={question.id}
            question={question}
            user={users[question.user]}
          />
        ))}
      </header>
    </div>
  );
}
export default Home;

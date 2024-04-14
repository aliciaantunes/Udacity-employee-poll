/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsHandler } from '../redux/action-handlers/questionsActions';
import { getUsersHandler } from '../redux/action-handlers/userActions';
import Card from '../components/Card';

function Home() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const sortedQuestions = [...questions].sort(
    (a, b) => b.timestamp - a.timestamp
  );
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getQuestionsHandler());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsersHandler());
  }, [dispatch]);

  const [showAnswered, setShowAnswered] = useState(false);

  const unanswered = (question) =>
    !question?.optionOne?.votes.includes(authedUser?.id) &&
    !question?.optionTwo?.votes.includes(authedUser?.id);

  const answered = (question) =>
    question?.optionOne?.votes.includes(authedUser?.id) ||
    question?.optionTwo?.votes.includes(authedUser?.id);

  return (
    <div>
      <h1
        className="text-3xl font-bold mt-9"
        data-testid="heading"
      >
        Dashboard
      </h1>

      <button
        type="button"
        onClick={() => setShowAnswered(false)}
        className={`mr-4 ${!showAnswered ? 'text-blue-500' : ''}`}
      >
        New Questions
      </button>
      <button
        type="button"
        onClick={() => setShowAnswered(true)}
        className={`${showAnswered ? 'text-blue-500' : ''}`}
      >
        Answered Questions
      </button>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedQuestions
          .filter(showAnswered ? answered : unanswered)
          .map((question) => (
            <li key={question.id}>
              <Card
                question={question}
                author={users[question.author]}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Home;

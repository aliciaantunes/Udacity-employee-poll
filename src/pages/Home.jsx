import React, { useEffect } from 'react';
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

  console.log(users);

  const unanswered = (question) =>
    !question?.optionOne?.votes.includes(authedUser?.id) &&
    !question?.optionTwo?.votes.includes(authedUser?.id);

  const answered = (question) =>
    question?.optionOne?.votes.includes(authedUser?.id) ||
    question?.optionTwo?.votes.includes(authedUser?.id);

  console.log(questions);

  return (
    <div>
      <h1
        className="text-3xl font-bold mt-9"
        data-testid="heading"
      >
        Dashboard
      </h1>

      <h2 className="text-2xl font-bold mt-6">New Questions</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedQuestions.filter(unanswered).map((question) => (
          <li key={question.id}>
            <Card
              question={question}
              author={users[question.author]}
            />
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-6">Answered Questions</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedQuestions.filter(answered).map((question) => (
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

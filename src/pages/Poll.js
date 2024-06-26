/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named
import { addQuestionAnswerHandler } from '../redux/action-handlers/questionsActions';

function PollPage() {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector((state) => state.session.user);
  const question = useSelector((state) =>
    state.questions.find((q) => q.id === id)
  );

  useEffect(() => {
    if (!question) {
      navigate('/404');
    }
  }, [question]);

  const hasVotedForOptionOne = question?.optionOne.votes.includes(
    authedUser.id
  );
  const hasVotedForOptionTwo = question?.optionTwo.votes.includes(
    authedUser.id
  );
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(
      addQuestionAnswerHandler({
        authedUser: authedUser.id,
        qid: question.id,
        answer: 'optionOne',
      })
    );
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(
      addQuestionAnswerHandler({
        authedUser: authedUser.id,
        qid: question.id,
        answer: 'optionTwo',
      })
    );
  };

  const calcPercentage = (option, questionParam) => {
    if (!questionParam) return '';

    const numberVotesTotal =
      questionParam.optionOne.votes.length +
      questionParam.optionTwo.votes.length;

    switch (option) {
      case 'optionOne':
        return `${(questionParam.optionOne.votes.length / numberVotesTotal) * 100} %`;
      case 'optionTwo':
        return `${(questionParam.optionTwo.votes.length / numberVotesTotal) * 100} %`;
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={question?.avatarURL}
          alt="Profile"
          className="h-24 w-24"
        />
      </div>

      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          type="button"
          onClick={handleOptionOne}
          disabled={hasVoted}
          className={`p-2 rounded-xl hover:shadow-xl transition ${
            hasVotedForOptionOne ? 'bg-lime-400' : 'bg-zinc-100'
          }`}
        >
          <div className={hasVotedForOptionOne ? 'chosen' : ''}>
            <p className="font-bold mb-2">{question?.optionOne.text}</p>
            {!hasVoted && (
              <p className="underline underline-offset-4 mb-3">Click</p>
            )}
            {hasVoted && (
              <p className="text-xs">
                Votes: {question?.optionOne.votes.length} (
                {calcPercentage('optionOne', question)})
              </p>
            )}
          </div>
        </button>

        <button
          type="button"
          onClick={handleOptionTwo}
          disabled={hasVoted}
          className={`p-2 rounded-xl hover:shadow-xl transition ${
            hasVotedForOptionTwo ? 'bg-lime-400' : 'bg-zinc-100'
          }`}
        >
          <p className="font-bold mb-2">{question?.optionTwo.text}</p>
          {!hasVoted && (
            <p className="underline underline-offset-4 mb-3">Click</p>
          )}
          {hasVoted && (
            <p className="text-xs">
              Votes: {question?.optionTwo.votes.length} (
              {calcPercentage('optionTwo', question)})
            </p>
          )}
        </button>
      </div>
    </div>
  );
}

export default PollPage;

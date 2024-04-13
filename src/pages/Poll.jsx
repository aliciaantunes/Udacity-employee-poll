import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'wouter';
// eslint-disable-next-line import/named
import { addQuestionAnswerHandler } from '../redux/action-handlers/questionsActions';

function PollPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.session.user);
  const question = useSelector((state) =>
    state.questions.find((q) => q.id === id)
  );

  const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
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

  console.log('question:', question);
  console.log('autheduser', authedUser);
  console.log('hasVotedForOptionOne', hasVotedForOptionOne);
  console.log('hasVotedForOptionTwo', hasVotedForOptionTwo);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold mt-9">Poll by {author.id}</h1> */}

      <div className="flex justify-center">
        {/* <img src={author.avatarURL} alt="Profile" className="h-24 w-24" /> */}
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
            <p className="font-bold mb-2">{question.optionOne.text}</p>
            {!hasVoted && (
              <p className="underline underline-offset-4 mb-3">Click</p>
            )}
            {hasVoted && (
              <p className="text-xs">
                Votes: {question.optionOne.votes.length} (
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
          <p className="font-bold mb-2">{question.optionTwo.text}</p>
          {!hasVoted && (
            <p className="underline underline-offset-4 mb-3">Click</p>
          )}
          {hasVoted && (
            <p className="text-xs">
              Votes: {question.optionTwo.votes.length} (
              {calcPercentage('optionTwo', question)})
            </p>
          )}
        </button>
      </div>
    </div>
  );
}

export default PollPage;

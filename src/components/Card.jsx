import React from 'react';
import { Link } from 'wouter';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Card({ question, author }) {
  console.log(author?.avatarURL);

  return (
    <Link to={`questions/${question.id}`}>
      <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-zinc-300 max-w-sm mx-auto flex items-center space-x-4">
        <div className="shrink-0">
          <img
            className="h-12 w-12"
            src={author?.avatarURL}
            alt="Author"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">
            {question.author}
          </div>
          <p className="text-xs italic">
            {new Date(question.timestamp).toDateString()}
          </p>
          <p className="underline underline-offset-4">Show</p>
        </div>
      </div>
    </Link>
  );
}

/*
const question: {
  id: "8xf0y6ziyjabvozdd253nd",
  author: "sarahedo",
  timestamp: 1467166872634,
};
const author: {
  avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
};
*/

Card.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
  }),
  author: PropTypes.shape({
    avatarURL: PropTypes.string.isRequired,
  }),
};

Card.defaultProps = {
  question: {},
  author: {},
};

export default Card;

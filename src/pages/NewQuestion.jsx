import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionHandler } from '../redux/action-handlers/questionsActions';

function LoginForm() {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.session.user);
  const [optionOne, setoptionOne] = useState('');
  const [optionTwo, setoptionTwo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addQuestionHandler({
        author: authedUser.id,
        optionOneText: optionOne,
        optionTwoText: optionTwo,
      })
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-5 bg-white shadow-lg rounded-lg overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="px-8 py-6"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="optionOne"
          >
            Option One:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="optionOne"
              type="text"
              value={optionOne}
              onChange={(e) => setoptionOne(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="optionTwo"
          >
            Option Two:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="optionTwo"
              type="optionTwo"
              value={optionTwo}
              onChange={(e) => setoptionTwo(e.target.value)}
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

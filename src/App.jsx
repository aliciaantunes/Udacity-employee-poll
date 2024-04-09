import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestionsHandler,
  getUsersHandler,
  addQuestionHandler,
} from "./redux/action-handlers/questionsActions";

// Redux flow:
// 1. User click in the button to fetch
// 2. The fetchQuestions function is called
// 3. The fetchQuestions function dispatch the getQuestionsHandler action
// 4. The getQuestionsHandler fetch the data from the Fake API
// 5. The getQuestionsHandler dispatch the reducer with the data
// 6. The reducer update the state with the new data
// 7. The useSelector hook get the new data from the state

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  const fetchQuestions = () => {
    console.log("Fetching questions...");
    dispatch(getQuestionsHandler());
  };

  const fetchUsers = () => {
    console.log("Fetching users...");
    dispatch(getUsersHandler());
  };

  const newQuestion = () => {
    console.log("Creating new question...");

    const question = {
      author: "tylermcginnis",
      optionOneText: "Mexerica",
      optionTwoText: "Pokan",
    };

    dispatch(addQuestionHandler(question));
  };

  // const newAnswer = () => {
  //   console.log("Creating new question...");

  //   const answer = {
  //     authedUser: "alicia",
  //     qid: "am8ehyc8byjqgar0jgpub9",
  //     answer: "optionTwo",
  //   };

  //   dispatch(addQuestionHandler(answer));
  // };

  console.log("questions:", questions);
  console.log("users:", users);
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={fetchQuestions}>
          Fetch Questions
        </button>
        <button type="button" onClick={fetchUsers}>
          Fetch Users
        </button>
        <button type="button" onClick={newQuestion}>
          NewQuestion
        </button>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>{question.optionOne.text}</li>
          ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

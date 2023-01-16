import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import AddQuestions from "./AddQuestions";
import RunGame from "./RunGame";
import TrashIcon from "./icons/TrashIcon";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("questions") !== null) {
      setQuestions(JSON.parse(localStorage.getItem("questions")));
    }
  }, []);
  function isGameReady() {
    return questions.length > 0;
  }

  function deleteGame() {
    localStorage.removeItem("questions");
    setQuestions([]);
  }

  return isGameReady() ? (
    <>
      <RunGame questions={questions} />
      <button id="deleteGame" onClick={() => deleteGame()}>
        <TrashIcon />
      </button>
    </>
  ) : (
    <AddQuestions setQ={setQuestions} />
  );
};

render(<App />, document.getElementById("root"));

import { shuffleArray } from "./utils";
import { useContext } from "react";
import { ScoreContext } from "./scoreContext";

const AskQuestion = (params) => {
  const question = params.question;
  const correctAnswer = question.answers[0];
  const answers = shuffleArray(question.answers);
  const [gameState, setGameState] = useContext(ScoreContext);

  function checkAnswer(a) {
    let newScore = gameState.score;
    // the correct answer is always the first one
    if (correctAnswer === a) {
      newScore += 1;
    }
    setGameState({
      ...gameState,
      score: newScore,
      questionIdx: gameState.questionIdx + 1,
    });
  }

  return (
    <div className="container">
      <p>{question.question}</p>
      <div>
        {answers.map((a) => {
          return (
            <button onClick={() => checkAnswer(a)} key={a}>
              {a}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AskQuestion;

import AskQuestion from "./AskQuestion";
import { useContext } from "react";
import { ScoreContext } from "./scoreContext";

const PlayGame = () => {
  const [gameState] = useContext(ScoreContext);

  return <AskQuestion question={gameState.questions[gameState.questionIdx]} />;
};

export default PlayGame;

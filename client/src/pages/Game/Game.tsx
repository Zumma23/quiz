import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import Quiz from "../../components/Quiz/Quiz";
const Game: FC = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/api/find").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  return (
    <>
      <h1>Game</h1>
      <Quiz questions={questions} setQuestions={setQuestions} />
    </>
  );
};

export default Game;

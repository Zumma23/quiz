import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import Quiz from "../../components/Quiz/Quiz";
const Game: FC = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    axios.get("/api/find").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  return (
    <>
      <Quiz questions={questions} setQuestions={setQuestions} />
    </>
  );
};

export default Game;

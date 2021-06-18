import React, { FC, useState, useEffect } from "react";
import Question from "../Question/Question";
import { CircularProgress } from "@material-ui/core";

import "./Quiz.scss";
const Quiz = ({ questions, setQuestions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState();
  const [score, setScore] = useState(0);

  useEffect(() => {
    setAnswers(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (answer) => {
    return answer.sort(() => Math.random() - 0.5);
  };

  console.log(questions);
  const correct = questions && questions[currentQuestion]?.correct_answer;
  return (
    <>
       {questions ? (
          <div className="container">
            <div className="game-wrapper">
              <h1 className="game-wrapper__suptitle">Question {currentQuestion + 1}/{questions.length}</h1>
              {/* <h1 className="game-wrapper__subtitle"> {questions[currentQuestion].question}</h1> */}
              <h2 className="game-wrapper__score">Score {score}</h2>
            </div>
            <Question 
            currQues={currentQuestion}
            setCurrQues={setCurrentQuestion}
            questions={questions}
            options={answers}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />
          </div>
        ) : (
          <CircularProgress />
        )}
      {/* <Question
        currQues={currentQuestion}
        setCurrQues={setCurrentQuestion}
        options={answers}
        correct={correct}
        score={score}
        setScore={setScore}
        questions={questions}
        setQuestions={setQuestions}
      /> */}
    </>
  );
};

export default Quiz;

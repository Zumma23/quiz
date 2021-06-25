import { useState } from "react";
import { Button } from "@material-ui/core";
import ErrorMessage from "../ErrorMessage/ErrorMesage";
import Score from "../Score/Score";

import "./Question.scss";
export default function Question({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [result, setResult] = useState(false);

  const handleSelect = (element) => {
    if (selected === element && selected === correct) return "select";
    else if (selected === element && selected !== correct) return "wrong";
    else if (element === correct) return "select";
  };

  const handleCheck = (element) => {
    setSelected(element);
    if (element === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues >= questions.length - 1) {
      setResult(true);
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };
  return (
    <>
      {!result ? (
        <div className="question">
          <div className="game-inner">
            <img
              className="game__img"
              style={{ width: 300, height: 300, marginBottom: 40 }}
              src={`/uploads/${questions[currQues].image}`}
              alt=""
            />
          </div>
          <div className="game-answers">
            <div className="row">
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {options &&
                options.map((element, index) => (
                  <div key={index} className="col-md-12 col-lg-6">
                    <button
                      className={`game-answer__button  ${
                        selected && handleSelect(element)
                      }`}
                      key={element}
                      onClick={() => handleCheck(element)}
                      disabled={selected}
                    >
                      {element}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="game-controls">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 185, marginRight: 10 }}
              href="/"
              onClick={() => handleQuit()}
            >
              Quit
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: 185 }}
              onClick={() => handleNext()}
            >
              {currQues > 20 ? "Submit" : "Next Question"}
            </Button>
          </div>
          <Score score={score} />
        </div>
      ) : (
        <Score score={score} />
      )}
    </>
  );
}

const { Schema, model } = require("mongoose");

const betaQuiz = new Schema({
  first: String,
  second: String,
  thrid: String,
  correct_answer: String,
  incorrect_answers: [String],
  image: String,
});
module.exports = model("result", betaQuiz);

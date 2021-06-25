const { Router } = require("express");
const router = Router();
const Question = require("../models/Question");
const multer = require("multer");

router.get("/find", async (req, res) => {
  Question.find().then((questions) => res.json(questions));
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./client/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/question", upload.single("image"), async (req, res) => {
  const { first, second, thrid, correct_answer, image } = req.body;

  const questions = new Question({
    correct_answer,
    incorrect_answers: [first, second, thrid],
    image: req.file.originalname,
  });
  await questions.save();
  res.status(201).json({ message: "Создан" });
});
module.exports = router;

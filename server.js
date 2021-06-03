const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose")

const port = process.env.PORT || 5000

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use("/api/auth", require("./routes/auth.route"));


mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.gb9yh.mongodb.net/quiz?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }
);


const userSchema = {
  email: String,
  password: String,
};
// const User = mongoose.model("User", userSchema);

// app.get("/users", function (req, res) {
//   User.find().then((users) => res.json(users));
// });


// app.post("/registration", async (req, res) => {
//   const { email, password } = req.body;

//   const isUsed = await User.findOne({ email });
//   if (isUsed) {
//     return res.status(300).json({ message: "Занято" });
//   }

//   const user = new User({
//     email,
//     password,
//   });
//   await user.save();
//   res.status(201).json({ message: "Создан" });
// });



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port,()=>{
  console.log(`Server starting at ${port}`)
})


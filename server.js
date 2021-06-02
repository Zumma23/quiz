const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose")

const port = process.env.PORT || 5000

const app = express();

app.use(bodyParser.json())
app.use(cors())


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
const User = mongoose.model("User", userSchema);

app.get("/users", function (req, res) {
  User.find().then((users) => res.json(users));
});



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port,()=>{
  console.log(`Server starting at ${port}`)
})


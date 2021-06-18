const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose")
const autRoutes = require("./routes/auth.routes")
const questionsRoutes = require("./routes/question.route")
const corsMiddleware =require('./middleware/cors.middleware')

const port = process.env.PORT || 5000

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use("/api/auth", autRoutes);
app.use("/api", require('./routes/question.route'))


const start = async()=>{
try{
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.gb9yh.mongodb.net/quiz?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  );

  
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


  app.listen(port,()=>{
    console.log(`Server starting at ${port}`)
  })

}catch(error){
  console.log(error)
}

}
start()








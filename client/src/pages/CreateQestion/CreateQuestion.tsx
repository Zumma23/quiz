import React, { FC, useState } from "react";
import axios from "axios";
import "./CreateQuestion.scss";
import Input from "../../components/Input/Input";

const CreateQuestions: FC = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [thrid, setThrid] = useState("");
  const [correct_answer, setCorrect_answer] = useState("");
  const [incorrect_answers, setIncorrect]: any = useState([]);
  const [added, setAdded] = useState(false);

  const [question, setQuestion]: any = useState([]);
  const [name, setName]: any = useState();

  const addPost = async () => {
    const formData = new FormData();
    formData.append("first", first);
    formData.append("second", second);
    formData.append("thrid", thrid);
    formData.append("question", question);
    formData.append("correct_answer", correct_answer);
    formData.append("incorrect_answers", incorrect_answers);
    formData.append("image", name);
    console.log(formData);
    await axios.post("/api/question", formData);
    setAdded(true);
  };
  console.log(added);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <Input
          value={correct_answer}
          setValue={setCorrect_answer}
          type="text"
          placeholder="Correct Answer"
        />
        <Input
          name="first"
          value={first}
          setValue={setFirst}
          type="text"
          placeholder="Incorrect Answer"
        />
        <Input
          name="second"
          value={second}
          setValue={setSecond}
          type="text"
          placeholder="Incorrect Answer"
        />
        <Input
          name="thrid"
          value={thrid}
          setValue={setThrid}
          type="text"
          placeholder="Incorrect Answer"
        />
        <input
          type="file"
          name="img"
          onChange={(e: any) => {
            setName(e.target.files[0]);
          }}
          style={{ color: "white" }}
          placeholder="IMG"
        />
      </form>
      <button className="btn-submit" onClick={addPost} type="submit">
        {" "}
        Add Post
      </button>
      {/* {added ? (
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      ) : (
        ""
      )} */}
    </>
  );
};

export default CreateQuestions;

import React, { useState } from "react";
// import axios from "axios";

export default function AuthPage() {
  // const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const { login } = useContext(AuthContext);

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  // const registerHandler = async () => {
  //   try {
  //     await axios.post(
  //       "/api/auth/registration",
  //       { ...form },
  //       // { headers: { "Content-Type": "aplication/json" } }
  //     );
  //     // history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const loginHandler = async () => {
  //   try {
  //     await axios
  //       .post(
  //         "/api/auth/login",
  //         { ...form },
  //         { header: { "Content-Type": "aplication/json" } }
  //       )
  //       // .then((response) => login(response.data.token, response.data.userId));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
        <div className="container">
          <div className="auth-page">
              <h3>Регистрация</h3>
              <form
                className="form form-login"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="row">
                  <div className="input-field col s12 ">
                    <input
                      type="email"
                      name="email"
                      className="validate"
                      onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12 ">
                    <input
                      type="password"
                      name="password"
                      className="validate"
                      onChange={changeHandler}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <button
                    className="wawes-effect wawes-light btn  blue "
                    // onClick={registerHandler}
                  >
                    Регистрация
                  </button>
                </div>
              </form>
          </div>
        </div>

  );
}

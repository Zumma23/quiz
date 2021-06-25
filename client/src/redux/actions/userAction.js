import axios from "axios";
import { setUser } from "../reducers/userReducer";
import { setMessage } from "../reducers/messageReducer";
export const registration = async (email, password) => {
  try {
    const response = await axios.post(`/api/auth/registration`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    console.log(e.response.data.message);
    setMessage(e.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      // await axios.post("/api/auth/login", {
      //   email,
      //   password,
      // });
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch(setMessage(e.response.data.message));
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch(setMessage(e.response.data.message));
      // localStorage.removeItem("token");
    }
  };
};

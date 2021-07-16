import axios from "axios";
import { Dispatch } from "redux";
import { setMessage } from "../reducers/messageReducer";
import { fetchUser, fetchUserError } from "../reducers/userReducer";

export const registration = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`/api/auth/registration`, {
        email,
        password,
      });
      dispatch(fetchUser(response.data.user));
      dispatch(setMessage(response.data.message));

      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e.response.data.message);

      dispatch(fetchUserError(e.response.data.message));
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      dispatch(fetchUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch(fetchUserError(e.response.data.message));
    }
  };
};

export const authCheck = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(fetchUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch(fetchUserError(e.response.data.message));
      // localStorage.removeItem("token");
    }
  };
};

const MESSAGE = "MESSAGE";
const REDIRECT = "REDIRECT";

const initialState = {
  message: "",
  redirect: false,
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case REDIRECT:
      return {
        ...state,
        redirect: action.payload,
      };

    default:
      return state;
  }
};

export const setMessage = (payload) => ({
  type: MESSAGE,
  payload,
});
export const setRedirect = (payload) => ({
  type: REDIRECT,
  payload,
});

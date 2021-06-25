const MESSAGE = "MESSAGE";

const initialState = {
  message: "",
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export const setMessage = (message) => ({
  type: MESSAGE,
  payload: message,
});

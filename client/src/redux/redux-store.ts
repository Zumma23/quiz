import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { messageReducer } from "./reducers/messageReducer";

const reducers = combineReducers({
  user: userReducer,
  message: messageReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;

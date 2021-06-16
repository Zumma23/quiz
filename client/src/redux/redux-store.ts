import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;

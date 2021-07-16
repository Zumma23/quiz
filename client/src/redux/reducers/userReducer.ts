import { UserState, UserActionTypes, UserAction } from "../types/user";

const initialState: UserState = {
  currentUser: {},
  isAuth: false,
  message: "",
  loading: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
        loading: false,
      };
    case UserActionTypes.FETCH_USERS_SUCCES:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
        loading: false,
      };
    case UserActionTypes.FETCH_USERS_EERROR:
      return {
        ...state,
        isAuth: false,
        loading: true,
        message: action.payload,
      };
    case UserActionTypes.LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export const fetchUser = (payload: any[]) => ({
  type: UserActionTypes.FETCH_USERS,
  payload: payload,
});
export const FetchUserSucces = (payload: any[]) => ({
  type: UserActionTypes.FETCH_USERS,
  payload: payload,
});
export const fetchUserError = (payload: string) => ({
  type: UserActionTypes.FETCH_USERS_EERROR,
  payload: payload,
});
export const logout = () => ({ type: UserActionTypes.LOGOUT });

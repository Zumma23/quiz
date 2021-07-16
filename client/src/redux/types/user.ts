export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCES = "FETCH_USERS_SUCCES",
  FETCH_USERS_EERROR = "FETCH_USERS_EERROR",
  LOGOUT = "LOGOUT",
}

export interface UserState {
  currentUser: object;
  isAuth: boolean;
  message: string;
  loading: boolean;
}

export interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
  payload: any[];
}
export interface FetchUserSuccesAction {
  type: UserActionTypes.FETCH_USERS_SUCCES;
  payload: string[];
}

export interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_EERROR;
  payload: string;
}

export interface LogOutAction {
  type: UserActionTypes.LOGOUT;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccesAction
  | FetchUserErrorAction
  | LogOutAction;

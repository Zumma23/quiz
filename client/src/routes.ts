import CreateQuestions from "./pages/CreateQestion/CreateQuestion";
import Game from "./pages/Game/Game";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Registration from "./pages/Registration/Registration";
import {
  GAME_ROUTE,
  CREATE_ROUTE,
  MAIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: GAME_ROUTE,
    Component: Game,
  },
  {
    path: CREATE_ROUTE,
    Component: CreateQuestions,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
];

export const publicRouters = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
];

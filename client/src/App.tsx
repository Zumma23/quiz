import React, { FC, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import { authCheck } from "./redux/actions/user";
import { authRoutes, publicRouters } from "./routes";
import { LOGIN_ROUTE, MAIN_ROUTE } from "./utils/consts";
const App: FC = () => {
  const { isAuth } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {isAuth
          ? authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} component={Component} exact />
            ))
          : publicRouters.map(({ path, Component }) => (
              <Route key={path} path={path} component={Component} exact />
            ))}
        {isAuth && <Redirect to={MAIN_ROUTE} />}
        <Redirect to={LOGIN_ROUTE} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import { auth } from "../redux/actions/userAction";
import { authRoutes, publicRouters } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";
const AppRouter: FC = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <Switch>
      {!isAuth
        ? authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))
        : publicRouters.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
      {/* <Redirect to={MAIN_ROUTE} /> */}
    </Switch>
  );
};

export default AppRouter;

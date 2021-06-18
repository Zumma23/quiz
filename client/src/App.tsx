import React, { FC, useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import { auth } from "./redux/actions/userAction";
import { authRoutes, publicRouters } from "./routes";
import { LOGIN_ROUTE, MAIN_ROUTE } from "./utils/consts";
const App: FC = () => {
  const [users, setUsers] = useState([]);
  const [connect, setConnect] = useState(false);
  const isAuth = useSelector((state: any) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://stormy-peak-20800.herokuapp.com/api/auth/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        setUsers(json);
        setConnect(true);
      });
  }, []);

  useEffect(() => {
    dispatch(auth());
  }, []);
  console.log(authRoutes);
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
      {/* <AppRouter/> */}
      <Footer />
    </div>
  );
};

export default App;

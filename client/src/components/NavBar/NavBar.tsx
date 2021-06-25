import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducers/userReducer";
import "./NavBar.scss";

const NavBar: FC = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const dispacth = useDispatch();
  return (
    <>
      <nav className="nav">
        <div className="container-fluid">
          <div className="nav__inner  ">
            {isAuth ? (
              <Link to="/cabinet" className="nav__login-title cabinet">
                Cabinet
              </Link>
            ) : (
              ""
            )}{" "}
            <Link to="/" className="nav__logo-title">
              wizard puzzels
            </Link>
            <div className=" nav__login ">
              {isAuth ? (
                <>
                  <Link to="/game" className="nav__login-title play">
                    Play
                  </Link>
                  <Link
                    to="/login"
                    className="nav__login-title"
                    onClick={() => dispacth(logout())}
                  >
                    Log out
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="nav__login-title "
                  onClick={() => dispacth(logout())}
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;

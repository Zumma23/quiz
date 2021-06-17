import React,{FC} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducers/userReducer";
import './NavBar.scss'

const NavBar =()=>{
  const isAuth = useSelector((state: any) => state.user.isAuth);
const dispacth = useDispatch()
  return(
    <>
    <nav className="nav">
      <div className="container-fluid">
        <div className="nav__inner  ">
          <div className="nav__logo"></div>
          <Link to="/" className="nav__logo-title">
            wizard puzzels
          </Link>
          <div className=" nav__login ">
            <Link
              to="/login"
              className="nav__login-title"
            >
    {isAuth ? <button  className="nav__login-title" onClick={()=>dispacth(logout())}>Выход</button>: <div>Вход</div>}
            </Link>
            <Link to="/cabinet" >Game</Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
export default NavBar
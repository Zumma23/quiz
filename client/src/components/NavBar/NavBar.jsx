import React,{FC} from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/userReducer";


const NavBar =()=>{
  const isAuth = useSelector((state) => state.user.isAuth);
const dispacth = useDispatch()
  return(
    <>
    <h1>NavBar</h1>
    {isAuth ? <button onClick={()=>dispacth(logout())}>Выход</button>: <div>Вход</div>}
    </>
  )
}
export default NavBar
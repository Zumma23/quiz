import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "./components/AuthPage";

function App() {
  const [users, setUsers] = useState([]);
  const [connect, setConnect] = useState(false);
  useEffect(() => {
    fetch("https://stormy-peak-20800.herokuapp.com/api/auth/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonR) => {
        setUsers(jsonR);
        setConnect(true);
      });
  },[]);
  return <div className="App">
   
    {users.map((u:any) => 
    <div key={u.id}>{u.email}</div>
    )}
     <AuthPage/>
    
    </div>;
}

export default App;

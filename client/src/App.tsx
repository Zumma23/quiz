import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [connect, setConnect] = useState(false);
  useEffect(() => {
    fetch("/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonR) => {
        setUsers(jsonR);
        setConnect(true);
      });
  });
  return <div className="App">
    {users.map((u:any) => 
    <div key={u.id}>{u.email}</div>
    )}</div>;
}

export default App;

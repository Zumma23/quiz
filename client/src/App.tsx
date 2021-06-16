import React, { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";

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
  }, []);
  console.log(users)
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <div className="row">
        <div className="col" style={{fontSize:100}}>
        Для осуществления хозяйственной деятельности каждое предприятие использует не только собственные ресурсы, но и привлеченный (заемный) капитал. Предприятие, которое предусматривает источником пополнения оборотных средств в основном долгосрочные и текущие обязательства, то есть кредиторскую задолженность и краткосрочный банковский кредит, рискует возможностью не привлечь вовремя нужную сумму денег, и тогда оно может оказаться неплатежеспособным. В связи с этим организация должна следить за своевременным погашением текущих обязательств и при помощи проведения анализа предотвращать неблагоприятные тенденции – наличие просроченных обязательств.        </div>
      </div>
    </div>
  );
}

export default App;

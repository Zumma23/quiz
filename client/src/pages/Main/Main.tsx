import React, { FC } from "react";
import Slick from "../../components/Slick/Slick";
import Category from "../../components/Category/Category";

import "./Main.scss";
const Main: FC = () => {
  return (
    <main className="info">
      <div className="container-fluid">
        <div className="info-inner">
          <div className="info-content">
            <h1 className="info-content__suptitle">Quess The Actor</h1>
            <h2 className="info-content__subtitle">
              This is a very simple game that will show how often you read
              books.
            </h2>
          </div>
          <div className="info-slick">
        <Slick />
        </div>
        </div>
        
        <Category />
      </div>
     
    </main>
  );
};

export default Main;

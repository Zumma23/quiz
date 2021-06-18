import React, { FC } from "react";
import { Link } from "react-router-dom";
import game from "../../image/category/game.jpg";
import imgCreate from "../../image/category/create.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "./Category.scss";

const Category: FC = () => {
  return (
    <>
      <div className="category">
        <div className="container">
          <h1 className="category__title">Choose_)</h1>
          <div className="row">
            <div className=" col-12">
              <Link to="/game" className="category-inner__link">
                <div className="category-inner">
                  <div className="category-inner__img">
                    <img
                      style={{ width: "100%" }}
                      className="img"
                      src={game}
                      alt=""
                    />
                  </div>
                  <div className="category-inner__text">Play game</div>
                  GO
                  <ArrowForwardIcon />
                </div>
              </Link>
            </div>
            <div className=" col-12">
              <Link to="/create-questions" className="category-inner__link">
                <div className="category-inner">
                  <div className="category-inner__img">
                    <img
                      style={{ width: "100%" }}
                      className="img"
                      src={imgCreate}
                      alt=""
                    />
                  </div>
                  <div className="category-inner__text">
                    Create the questions{" "}
                  </div>
                  GO
                  <ArrowForwardIcon />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

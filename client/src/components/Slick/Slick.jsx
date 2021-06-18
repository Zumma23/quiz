import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.css";
import rules1 from "../../image/slider/rules_1.jpg";
import rules2 from "../../image/slider/rules_2.jpg";
import rules3 from "../../image/slider/rules_3.jpg";
import rules4 from "../../image/slider/rules_4.jpg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src={rules1}
              alt=""
            />
            <p className="rules__description-text">
              A portrait of the writer will appear in front of you below there
              will be 4 answers, one of them is correct
            </p>
          </div>
          <div>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src={rules2}
              alt=""
            />
            <p className="rules__description-text">
              If the answer is correct, it will turn green
            </p>
          </div>
          <div>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src={rules3}
              alt=""
            />
            <p className="rules__description-text">
              If the answer is wrong, it will turn red
            </p>
          </div>
          <div>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src={rules4}
              alt=""
            />
            <p className="rules__description-text">
              Be sure to click on the answer
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}

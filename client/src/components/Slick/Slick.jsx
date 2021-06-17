import React, { Component } from "react";
import Slider from "react-slick";
import './Slick.css'
import img from '../../image/slider/slider-1.jpg'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
          <img 
          style={{ width: "100%",  borderRadius: '15px' }}
          width={{width: 100}} src={img} alt="" />
          </div>
          <div>
          <img 
          style={{ width: "100%",  borderRadius: '15px' }}
          width={{width: 100}} src={img} alt="" />
          </div>
          <div>
          <img 
          style={{ width: "100%",  borderRadius: '15px' }}
          width={{width: 100}} src={img} alt="" />
          </div>
          <div>
          <img 
          style={{ width: "100%",  borderRadius: '15px' }}
          width={{width: 100}} src={img} alt="" />
          </div>
          <div>
          <img 
          style={{ width: "100%",  borderRadius: '15px' }}
          width={{width: 100}} src={img} alt="" />
          </div>
          <div>
          <img 
          style={{ width: "100%",  borderRadius: '15px' }}
          width={{width: 100}} src={img} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
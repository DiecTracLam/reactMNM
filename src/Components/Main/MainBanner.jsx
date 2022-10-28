import React, { useState } from "react";

const MainBanner = (props) => {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 3000);
  return (
    <div className="banner">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div className="slide first ">
            <img src={require("../../assets/img/slide1.jpg")} alt="" />
          </div>
          <div className="slide ">
            <img src={require("../../assets/img/slide2.jpg")} alt="" />
          </div>
          <div className="slide ">
            <img src={require("../../assets/img/slide3.jpg")} alt="" />
          </div>
          <div className="slide ">
            <img src={require("../../assets/img/slide4.jpg")} alt="" />
          </div>
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="navigation-manual">
          <label className="manual-btn"></label>
          <label className="manual-btn"></label>
          <label className="manual-btn"></label>
          <label className="manual-btn"></label>
        </div>
      </div>
      <div className="banner2">
        <ul>
          <li className="banner2-list">
            <img
              src={require("../../assets/img/banner1.jpg")}
              alt=""
              className="banner2-img"
            />
          </li>
          <li className="banner2-list">
            <img
              src={require("../../assets/img/banner2.jpg")}
              alt=""
              className="banner2-img"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainBanner;

import React from "react";
import "../CSS/HomeIntro.css";
import google from "../Picture/image27.png";
import microsoft from "../Picture/image 28.png";
import dribble from "../Picture/image26.png";
import lattice from "../Picture/image 29.png";
import play from "../Picture/Group 5.png";
import vector from "../Picture/Vector 1.png";
import img0 from "../Picture/Group 4447.png";

const HomeIntro = () => {
  return (
    <div className="homeIntroPage">
      <div className="introTop">
        <div className="topLeft">
          <div className="introleftTitle">
            For Every Student Every Classroom.{" "}
            <span className="real">Real Results.</span>
          </div>
          <div className="leftDetail">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a
            completeLorem ipsum dolor sit amet, consectetur adipi scing elit,
            sed do eiusm
          </div>
          <div className="leftBtnContainer">
            <button>Get Started</button>
            <img src={play} alt="image" />
            <span>Watch Video</span>
          </div>
          <img src={vector} alt="image" />
        </div>

        <div className="topRight">
          <img src={img0} alt="image" />
        </div>
      </div>
      <div className="introBottom">
        <img className="goog" src={google} alt="image" />
        <img className="micro" src={microsoft} alt="image" />
        <img className="drib" src={dribble} alt="image" />
        <img className="lat" src={lattice} alt="image" />
      </div>
    </div>
  );
};

export default HomeIntro;

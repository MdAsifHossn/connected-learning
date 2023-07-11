import React from "react";
import "../CSS/Service.css";
import serv1 from "../Picture/serv1.svg";
import serv2 from "../Picture/serv2.svg";
import serv3 from "../Picture/serv3.png";
import serv4 from "../Picture/serv4.svg";
import serv6 from "../Picture/serv6.svg";
import serv7 from "../Picture/serv7.svg";
import serv8 from "../Picture/serv8.svg";

const Service = () => {
  return (
    <div className="serviceBody">
      <div className="serviceHeader">
        <div className="service">Service</div>
        <div className="top">Top Categorries</div>
      </div>

      <div className="serviceContainer">
        <div className="serviceCardContainer">
          <div className="serviceTypeDiv">
            <img className="imgService" src={serv1} alt="image" />
            <span className="serviceType">Development</span>
          </div>
        </div>

        <div className="serviceCardContainer">
          <div className="serviceTypeDiv">
            <img className="imgService" src={serv2} alt="image" />
            <span className="serviceType">Business</span>
          </div>
        </div>

        <div className="serviceCardContainer3">
          <div className="serviceTypeDiv">
            <img className="imgService3" src={serv3} alt="image" />
            <span className="serviceType3">IT and Software</span>
          </div>
        </div>

        <div className="serviceCardContainer">
          <div className="serviceTypeDiv">
            <img className="imgService" src={serv4} alt="image" />
            <span className="serviceType">UI Design</span>
          </div>
        </div>

        <div className="serviceCardContainer">
          <div className="serviceTypeDiv">
            <img className="imgService" src={serv2} alt="image" />
            <span className="serviceType">UX Design</span>
          </div>
        </div>

        <div className="serviceCardContainer">
          <div className="serviceTypeDiv">
            <img className="imgService" src={serv6} alt="image" />
            <span className="serviceType">Marketing</span>
          </div>
        </div>

        <div className="serviceCardContainer">
          <div className="serviceTypeDiv">
            <img className="imgService" src={serv7} alt="image" />
            <span className="serviceType">Photography</span>
          </div>
        </div>

        <div className="serviceCardContainer">
          <div className="serviceTypeDiv">
            <img className="imgService" src={serv8} alt="image" />
            <span className="serviceType">Graphics Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from "react";
import "../CSS/Footer.css";
import navlogo from "../Picture/navlogo.png";
import img30 from "../Picture/image30.png";
import img31 from "../Picture/image31.png";
import fb from "../Picture/facebook7.svg";
import tw from "../Picture/twitter7.svg";
import ln from "../Picture/linkedin7.svg";

const Footer = () => {
  return (
    <div className="footerBody">
      <div className="section1">
        <img className="logo" src={navlogo} alt="logo" />
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.
        </p>
        <img className="imgAppstore" src={img30} alt="image" />
        <img className="imgGoogle" src={img31} alt="image" />
        <span className="follow">Follow Us</span>
        <div className="logoContainer">
          <img src={ln} alt="image" />
          <img src={tw} alt="image" />
          <img src={fb} alt="image" />
        </div>
      </div>

      <div className="section2">
        <span className="title">About Us</span>
        <div className="sec2list">
          <li>Our company</li>
          <li>Career</li>
          <li>Investor Relations</li>
          <li>Social Impact</li>
        </div>
      </div>

      <div className="section3">
        <span className="title">Resources</span>
        <div className="sec3list">
          <li>Contact</li>
          <li>Give Feedback</li>
          <li>Hello@example.com</li>
        </div>
      </div>

      <div className="section4">
        <div className="emailContainer">
          <input className="email" type="text" placeholder="Email Address" />
          <button className="btnStart">Started</button>
        </div>
        <div className="sec4list">
          <li>Email US</li>
          <li>RK@Oama.io</li>
          <li>Bolomu All Rights Reserved, 2021</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;

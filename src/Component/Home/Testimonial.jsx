import React from "react";
import "../CSS/Testimonial.css";
import lady5 from "../Picture/lady5.png";
import star from "../Picture/star.svg";

const Testimonial = () => {
  return (
    <>
      <div className="testiContainer">
        <div className="leftDiv">
          <span className="testTitle">Testimonial</span>
          <p className="leftTitle">What They Say?</p>
          <p className="testipragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
            smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
          </p>
          <p className="testipragraph">
            enderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="asmntContainer">
            <input
              className="asmnt"
              type="text"
              placeholder="Write your Assessment"
            />
            <button className="btnAsmnt">➜</button>
          </div>
        </div>

        <div className="testirightDiv">
          <img src={lady5} alt="image" />
          <div className="picNext">➜</div>
          <div className="ladyDetail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in
              repreh
            </p>
            <div className="detailFooter">
              <span className="ruksana">Ruksana Akter</span>
              <img src={star} alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="testiFooter"></div>
    </>
  );
};

export default Testimonial;

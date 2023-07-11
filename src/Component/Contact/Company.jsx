import React from "react";
import "../CSS/Company.css";
import contact1 from "../Picture/contact1.png";
import contact2 from "../Picture/contact2.png";
import contact3 from "../Picture/contact3.png";
import contact4 from "../Picture/contact4.png";

const Company = () => {
  return (
    <div className="companyBody">
      <div className="companyTop">
        <p className="companyTitle1">Contact Us</p>
        <p className="companyTitle2">Our Company Contact Now</p>
      </div>

      <div className="companyBtm">
        <div className="companyBtmLeft">
          <div className="btmLeftTop">
            <p className="comBtmLeft1">Get In Touch With Us</p>
            <p className="comBtmLeft2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <div className="comBtmLeftBtm">
            <div className="btmLeftBtmDiv">
              <img src={contact1} alt="image" />
              <div className="insideRightDiv">
                <p className="addressType">Our Address</p>
                <p className="addressDescription">
                  2972 Westheimer Rd. Santa Ana, Illinois 8585
                </p>
              </div>
            </div>

            <div className="btmLeftBtmDiv">
              <img src={contact2} alt="image" />
              <div className="insideRightDiv">
                <p className="addressType">Contact Information</p>
                <p className="addressDescription">
                  Mobile: +8825465456 Email: example@gmail.com
                </p>
              </div>
            </div>

            <div className="btmLeftBtmDiv">
              <img src={contact3} alt="image" />
              <div className="insideRightDiv">
                <p className="addressType">Contact Information</p>
                <p className="addressDescription">
                  Mobile: +8825465456 Email: example@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="companyImage">
          <img src={contact4} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Company;

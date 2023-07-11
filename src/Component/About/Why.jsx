import React from "react";
import "../CSS/Why.css";
import great from "../Picture/great.svg";
import dedicated from "../Picture/dedicted.svg";
import flexible from "../Picture/flexible.svg";
const Why = () => {
  return (
    <div className="whyBody">
      <div className="whyTopDiv">
        <p className="whyTitle">Why Us?</p>
        <p className="whyDetails">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roo piece of classical Latin literature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Latin profes
        </p>
      </div>

      <div className="whyBottomDiv">
        <div className="whyBottomLeft">
          <img className="whyImage" src={great} alt="image" />
          <p className="greatTitle">Great Experience</p>
          <p className="greatDescription">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roopiece of classical Latin liter ature from 45 BC, making it
            over 2000 years old. Ri chard McClintock, a Latin profes
          </p>
        </div>

        <div className="whyBottomLeft">
          <img src={great} alt="image" />
          <p className="greatTitle">Great Experience</p>
          <p className="greatDescription">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roopiece of classical Latin liter ature from 45 BC, making it
            over 2000 years old. Ri chard McClintock, a Latin profes
          </p>
        </div>

        <div className="whyBottomLeft">
          <img src={great} alt="image" />
          <p className="greatTitle">Great Experience</p>
          <p className="greatDescription">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roopiece of classical Latin liter ature from 45 BC, making it
            over 2000 years old. Ri chard McClintock, a Latin profes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;

import React from "react";
import "../CSS/HomeAbout.css";
import img1 from "../Picture/group0.png";
const HomeAbout = () => {
  return (
    <div className="aboutContainer">
      <div className="leftDiv">
        <img src={img1} alt="image" />
      </div>
      <div className="rightDiv">
        <span className="aboutUs">About Us</span>
        <p className="rightTitle">
          We are providing the best online digital courses.
        </p>
        <p className="pragraph">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roo piece of classical Latin literature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, l ooked up one of the more obscure
          Latin words, consectetur, from a Lorem Ips um passage, and going
          through the cites of the word in classical literature, di scovered the
          undoubtable source
        </p>
        <p className="pragraph">
          .Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonoru et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default HomeAbout;

import React from "react";
import "../CSS/Mission.css";
import aboutmission from "../Picture/aboutmission.png";
const Mission = () => {
  return (
    <div className="missionBody">
      <div className="missionleftDiv">
        <span className="ourMission">Our Mission</span>
        <p className="missionleftTitle">Build Better For Best Economy</p>
        <p className="missionPragraph">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roo piece of classical Latin literature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Lati.Contrary to popular
          belief, Lorem Ipsum is not simply piece of classical Latin
        </p>
        <p className="missionPragraph">
          literature from 45 BC, making it over 2000 years old. Ri chard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, l
          ooked up one of the more obscure Latin words, consectetur, from a
          Lorem Ips um passage, and going through the cites of the word in
          classical literature, di scovered the undoubtable source
        </p>
        <button>Join Our Team</button>
      </div>

      <div className="missionrightDiv">
        <img src={aboutmission} alt="image" />
        <div className="ceoDiv">
          <p className="ceoName">MST: Alonker lon</p>
          <p className="ceoDesignation">CEO,Education LTD</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;

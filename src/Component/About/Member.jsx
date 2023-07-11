import React from "react";
import "../CSS/Teacher.css";

const Member = () => {
  return (
    <div className="teacherBody">
      <div className="teacherHeader">
        <div className="team">Team Member</div>
        <div className="amazTitle">The Amazing Team of Us</div>
      </div>

      <div className="memberContainer">
        <div className="memberTopDiv">
          <div className="teacherCard">
            <p className="name">Pushpa Kanon</p>
            <p className="skill">CEO, derhab</p>
          </div>

          <div className="teacherCard">
            <p className="name">Lolona Khan</p>
            <p className="skill">Ui Designer</p>
          </div>

          <div className="teacherCard">
            <p className="name">Jahangiri Khan</p>
            <p className="skill">UX Designer</p>
          </div>

          <div className="teacherCard">
            <p className="name">Mukayemi Sha</p>
            <p className="skill">Developer</p>
          </div>
        </div>

        <div className="memberBottomDiv">
          <div className="memberCard">
            <p className="name">Pushpa Kanon</p>
            <p className="skill">Photography</p>
          </div>

          <div className="memberCard">
            <p className="name">Lolona Khan</p>
            <p className="skill">Graphics Deesigner</p>
          </div>

          <div className="memberCard">
            <p className="name">Jahangiri Khan</p>
            <p className="skill">Python Programmer</p>
          </div>

          <div className="memberCard">
            <p className="name">Mukayemi Sha</p>
            <p className="skill">Business Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;

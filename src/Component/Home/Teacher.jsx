import React from "react";
import "../CSS/Teacher.css";

const Teacher = () => {
  return (
    <div className="teacherBody">
      <div className="teacherHeader">
        <div className="team">Team Member</div>
        <div className="popular">Popular Professinoal Teachers</div>
      </div>

      <div className="teacherContainer">
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
    </div>
  );
};

export default Teacher;

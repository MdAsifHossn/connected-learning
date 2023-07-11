import React from "react";
import "../CSS/Course.css";
import course1 from "../Picture/course1.png";
import course2 from "../Picture/course2.png";
import course3 from "../Picture/course3.png";
import course4 from "../Picture/course4.png";
import star from "../Picture/star.svg";
import best from "../Picture/best.png";

const Course = () => {
  return (
    <div className="courseBody">
      <div className="courseHeader">
        <div className="courselist">Course List</div>
        <div className="find">Find your Perfect Course</div>
      </div>

      <div className="courseContainer">
        <div className="cardContainer">
          <img src={course1} alt="image" />
          <div className="uiDiv">
            <span className="ui">UI/UX Design</span>
            <img className="star" src={star} alt="image" />
          </div>
          <div className="bookingDiv">
            <span className="doller">$254.36</span>
            <button className="bookBtn">Book Now</button>
          </div>
          <div className="bestDiv">
            <div className="bestLogoDiv">
              <img className="bestLogo" src={best} alt="image" />
            </div>
            <span className="bestSell">Best Seller</span>
          </div>
          <div className="topCardCourseDiv">
            <span className="topCardCourseTitle">Web Design</span>
          </div>
        </div>

        <div className="cardContainer">
          <img src={course2} alt="image" />
          <div className="uiDiv">
            <span className="ui">UI/UX Design</span>
            <img className="star" src={star} alt="image" />
          </div>
          <div className="bookingDiv">
            <span className="doller">$254.36</span>
            <button className="bookBtn">Book Now</button>
          </div>
          <div className="bestDiv">
            <div className="bestLogoDiv">
              <img className="bestLogo" src={best} alt="image" />
            </div>
            <span className="bestSell">Best Seller</span>
          </div>
          <div className="topCardCourseDiv">
            <span className="topCardCourseTitle">Web Design</span>
          </div>
        </div>

        <div className="cardContainer">
          <img src={course3} alt="image" />
          <div className="uiDiv">
            <span className="ui">UI/UX Design</span>
            <img className="star" src={star} alt="image" />
          </div>
          <div className="bookingDiv">
            <span className="doller">$254.36</span>
            <button className="bookBtn">Book Now</button>
          </div>
          <div className="bestDiv">
            <div className="bestLogoDiv">
              <img className="bestLogo" src={best} alt="image" />
            </div>
            <span className="bestSell">Best Seller</span>
          </div>
          <div className="topCardCourseDiv">
            <span className="topCardCourseTitle">Marketing</span>
          </div>
        </div>

        <div className="cardContainer">
          <img src={course4} alt="image" />
          <div className="uiDiv">
            <span className="ui">UI/UX Design</span>
            <img className="star" src={star} alt="image" />
          </div>
          <div className="bookingDiv">
            <span className="doller">$254.36</span>
            <button className="bookBtn">Book Now</button>
          </div>
          <div className="bestDiv">
            <div className="bestLogoDiv">
              <img className="bestLogo" src={best} alt="image" />
            </div>
            <span className="bestSell">Best Seller</span>
          </div>
          <div className="topCardCourseDiv">
            <span className="topCardCourseTitle">Web Design</span>
          </div>
        </div>

        <div className="cardContainer">
          <img src={course1} alt="image" />
          <div className="uiDiv">
            <span className="ui">UI/UX Design</span>
            <img className="star" src={star} alt="image" />
          </div>
          <div className="bookingDiv">
            <span className="doller">$254.36</span>
            <button className="bookBtn">Book Now</button>
          </div>
          <div className="bestDiv">
            <div className="bestLogoDiv">
              <img className="bestLogo" src={best} alt="image" />
            </div>
            <span className="bestSell">Best Seller</span>
          </div>
          <div className="topCardCourseDiv">
            <span className="topCardCourseTitle">Web Design</span>
          </div>
        </div>

        <div className="cardContainer">
          <img src={course1} alt="image" />
          <div className="uiDiv">
            <span className="ui">UI/UX Design</span>
            <img className="star" src={star} alt="image" />
          </div>
          <div className="bookingDiv">
            <span className="doller">$254.36</span>
            <button className="bookBtn">Book Now</button>
          </div>
          <div className="bestDiv">
            <div className="bestLogoDiv">
              <img className="bestLogo" src={best} alt="image" />
            </div>
            <span className="bestSell">Best Seller</span>
          </div>
          <div className="topCardCourseDiv">
            <span className="topCardCourseTitle">Web Design</span>
          </div>
        </div>
      </div>

      <div className="viewDiv">
        <button>View All ➜</button>
      </div>
    </div>
  );
};

export default Course;

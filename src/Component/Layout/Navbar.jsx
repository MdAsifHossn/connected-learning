import React from "react";
import "../CSS/Navbar.css";
import navlogo from "../Picture/navlogo.png";
import { useLocation, useNavigation, useParams } from "react-router-dom";

const Navbar = () => {
  const activeStyle = {
    color: "#6278FF",
    display: "flex",
  };
  const hrStyle = {
    marginTop: "-2px",
    width: "24px",
    height: "2px",
    backgroundColor: "#6278FF",
    border: "none",
    float: "left",
  };
  const location = useLocation().pathname;
  return (
    <div className="navBody">
      <nav className="navContainer">
        <div className="navLogo">
          <img src={navlogo} alt="logo" />
        </div>

        <div className="navPage">
          <ul className="navItems">
            <li>
              <a href="/" style={location === "/" ? activeStyle : {}}>
                Home
              </a>
              {location === "/" && <hr style={hrStyle} />}
            </li>
            <li>
              <a href="/about" style={location === "/about" ? activeStyle : {}}>
                About
              </a>
              {location === "/about" && <hr style={hrStyle} />}
            </li>
            <li>
              <a
                href="/course"
                style={location === "/course" ? activeStyle : {}}
              >
                Course
              </a>
              {location === "/course" && <hr style={hrStyle} />}
            </li>
            <li>
              <a
                href="/contact"
                style={location === "/contact" ? activeStyle : {}}
              >
                Contact
              </a>
              {location === "/contact" && <hr style={hrStyle} />}
            </li>
          </ul>
        </div>

        <div className="navBtn">
          <button className="btnLogin">Login</button>
          <button className="btnSignup">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import HomeIntro from "./HomeIntro";
import HomeAbout from "./HomeAbout";
import Course from "./Course";
import Service from "./Service";
import Teacher from "./Teacher";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <HomeIntro />
      <HomeAbout />
      <Course />
      <Service />
      <Teacher />
      <Testimonial />
    </div>
  );
};

export default Home;

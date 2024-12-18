import React from "react";
import "./AboutMe.css";
import aboutMe from "../../../assets/aboutMe.png";
import { ArrowForward } from "@mui/icons-material";

function AboutMe() {
  return (
    <div className="about-me-root">
      <div className="icon-container">
        <img src={aboutMe} width={120} alt="aboutMe" />
      </div>
      <div className="text-container">
        <h3>Welcome to <span>Jenish Kotadiya's</span> Portfolio! 🚀🎓 </h3>
        <p>
          As a dedicated <span>IT </span> 
          enthusiast and final-year <span>Msc-it</span> student, I specialize in full-stack
          development💻 and problem-solving🧠, with expertise in  C, C++,Python, HTML🌐, CSS🎨, Java☕.
        </p>
      </div>
      <div className="load-more-container">
        <button>
          Load More <ArrowForward fontSize="3" />{" "}
        </button>
      </div>
    </div>
  );
}

export default AboutMe;

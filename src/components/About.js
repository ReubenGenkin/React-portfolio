import React from "react";
//import profilePicture from '../../assets/profilePic.jpg'
import "./style.css";
import Section from "./Section";

function About() {
  return (
    <Section
      sectionId="About"
      title="About"
      headerClassVal="about"
      children={
        <div className="row col-md-10 offset-1 about-content">
          <p className="fs-6 about-margin">
            Junior full stack developer proficient in core development
            technologies, such as JavaScript, HTML5, CSS, REACT.js and other
            technologies. I utilize my background in sales and the food service
            industry to effectively communicate and adapt within the AGILE
            workflow. In my work I bring a focus to DRY and concise code with
            other developers, as well as interactive, dynamic, and accessible
            design for users. I earned my full stack web development certificate
            from Rutgers Coding Bootcamp. When programming, I efficiently and
            effectively find solutions through collaborating with team members,
            as well as tools like GitHub.My goal with my work is to advance
            accessibility, and find creative ways to enhance the user.
          </p>
        </div>
      }
    />
  );
}

export default About;
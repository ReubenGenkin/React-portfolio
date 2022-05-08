import React from "react";
import Section from "./Section";


function Skills() {
  return (
    <Section
      sectionId="Skills"
      title="Skills"
      headerClassVal="skills"
      children={
        <div>
          <div>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
            <ul className="skill-list">
              <li>Node</li>
              <li>HTML5/CSS</li>
            </ul>
            <ul className="skill-list">
              <li>Git/GitHub</li>
              <li>GraphQL</li>
            </ul>
            <ul className="skill-list">
              <li>MongoDB/Mongoose</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
export default Skills;

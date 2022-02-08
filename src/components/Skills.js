import React from "react";
import Section from "./Section";
//import { DiGithubFull, DiBootstrap, DiGithubBadge, DiHtml5, DiJavascript1, DiJqueryLogo, DiMysql, DiReact, } from "react-icons/di";

function Skills() {
  return (
    <Section
      sectionId="Skills"
      title="Skills"
      headerClassVal="skills"
      children={
        <div>
          <div>
            <ul className=" skill-list">
              <li>React.js</li>
              <li>JavaScript</li>
            </ul>
            <ul className="skill-list">
              <li>Node</li>
              <li>HTML5/CSS</li>
            </ul>
            <ul className="skill-list">
              <li>Git/GitHub</li>
              <li>GraphQL</li>
            </ul>
            <ul className=" skill-list">
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

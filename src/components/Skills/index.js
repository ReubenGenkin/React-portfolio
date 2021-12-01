import React from "react";
import "./style.css";
import Section from "../Section";
//import { DiGithubFull, DiBootstrap, DiGithubBadge, DiHtml5, DiJavascript1, DiJqueryLogo, DiMysql, DiReact, } from "react-icons/di";

function Skills() {
  return (
    <Section
      sectionId="Skills"
      title="Skills"
      headerClassVal="skills"
      children={
        <div className="row offset-1 col-md-11">
          <h3 className="row skills-sub-header col-md-2">Well Versed in</h3>
          <div className="row w-100">
            <ul className="col-md-2 skill-list">
              <li>React.js</li>
              <li>JavaScript</li>
            </ul>
            <ul className="col-md-2 pl-5 skill-list">
              <li>Node</li>
              <li>HTML5/CSS</li>
            </ul>
            <ul className="col-md-2 skill-list">
              <li>Git/GitHub</li>
              <li>GraphQL</li>
            </ul>
            <ul className="col-md-2 skill-list">
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

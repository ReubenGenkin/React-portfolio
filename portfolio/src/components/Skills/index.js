import React from 'react';
import './style.css';
import { DiGithubFull, DiBootstrap, DiGithubBadge, DiHtml5, DiJavascript1, DiJqueryLogo, DiMysql, DiReact, } from "react-icons/di";

function Skills() {

    return (



        <section id="Skills" className="container-fluid about-container">
            <div className="skills-wrapper">

                <div className="row col-md-1 offset-1 ">
                    <h2 className=" col-md-1 section-header about-margin skills-header" >Skills</h2>
                </div>

                <div className="row offset-1 col-md-11" >
                    <h3 className="row skills-sub-header col-md-2">Well Versed in</h3>
                    <div className="row">
                    <ul className="col-md-2 skill-list">
                        <li>React.js</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul className="col-md-2 skill-list">
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
            </div>
        </section>
    )
}
export default Skills;
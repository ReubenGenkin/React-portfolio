import React from 'react';
import './style.css';
import { DiGithubFull, DiBootstrap, DiGithubBadge, DiHtml5, DiJavascript1, DiJqueryLogo, DiMysql, DiReact,  } from "react-icons/di";

function Skills() {

    return (



        <section id="Skills" className="container-fluid about-container">
            <div className="skills-wrapper">

                <div className="row col-md-10 offset-1 ">
                    <h2 className=" section-header about-margin" >Skills</h2>
                </div>

                <div className="row offset-1" >
                    <span>Well Versed</span>
                    <ul className="col-md-2">
                        <li> React.js</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul className="col-md-2">
                        <li>Node</li>
                        <li>HTML5/CSS</li>
                    </ul>
                    <ul className="col-md-2">
                        <li>Git/GitHub</li>
                        <li>GraphQL</li>
                    </ul>
                    <ul className="col-md-2">
                        <li>MongoDB/Mongoose</li>
                        <li>Express.js</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Skills;
import React from 'react';
import projects from "../projects.json"
import './style.css'

function Project(props) {
        return (

                <section id="Project" className="container-fluid">
                        <div className="row header-wrapper offset-1 projects-header-wrapper">
                                <h2 className="section-header projects-header">Projects</h2>
                        </div>


                        <div className="card-wrapper row offset-1 w-90">
                                {projects.map((project) => (
                                        <div className="card project-card col-md-3 border-0">
                                                <a  className="project-link">
                                                </a>
                             
                                                <a onClick={()=> props.setLanding(false)} className="project-link">
                                                        <div className="card-content">
                                                                <h5 className="card-title">{project.title}</h5>
                                                                <p className="card-text">{project.shortDes}</p>
                                                        </div>
                                                </a>

                                        </div>
                                ))}
                        </div>






                </section>
        );
}

export default Project;
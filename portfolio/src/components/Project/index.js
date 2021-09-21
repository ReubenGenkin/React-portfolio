import React from 'react';
import projects from "../projects.json"
import './style.css'

function Project(props) {
        return (

                <section id="Project" className="container-fluid">
                        <div className="row header-wrapper offset-1">
                                <h2 className="section-header projects-header">Projects</h2>
                        </div>


                        <div className="row offset-1">
                                {projects.map((project) => (
                                        <div className="card col-md-4 border-0">
                                                <a href={project.link} className="project-link">
                                                </a>
                             
                                                <a href={project.link} className="project-link">
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
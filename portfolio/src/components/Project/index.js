import React from 'react';
import projects from "../projects.json"
import './style.css'

function Project(props) {
        return (

                <section id="Project" className=" mb-2 g-2">
                        <div className="card content-card" >
                                <div className="card-body">
                                        <div className="row card-title-wrapper">
                                                <h2 className="card-title">Projects</h2>
                                        </div>

                                        <div className="card-text-wrapper">
                                                <div className="row">
                                                        {projects.map((project) => (
                                                                <div className="card col-md-4 border-0">
                                                                        <a href={project.link}>
                                                                                <img src={project.image} className="card-img" alt={project.title} />
                                                                        </a>
                                                                        <a href={project.link}>
                                                                                <div className="card-content">
                                                                                        <h5 className="card-title">{project.title}</h5>
                                                                                        <p className="card-text">{project.subtitle}</p>
                                                                                </div>
                                                                        </a>

                                                                </div>
                                                        ))}
                                                </div>

                                        </div>
                                </div>

                        </div>

                </section>
        );
}

export default Project;
import React from 'react';
import projects from "../Projects.json"
import './style.css'

function Project(props) {
        return (

                <section  id="Project" className="d-flex justify-content-center mb-5">
                        <div className="card w-100 m-3" >
                                <div className="row g-0">
                                        <h1 className="card-title d-flex justify-content-center">Projects</h1>
                                </div>
                                <div className="row g-0">
                                        <div className="align-self-center">
                                                <div className="card-body">
                                                        <div className="d-flex justify-content-between m-4">
                                                                {projects.map((project) => (

                                                                        <a href={project.link}>
                                                                                <div className="card bg-dark text-white" style={{ width: '22rem' }}>
                                                                                        <img src={project.image} className="card-img" alt={project.title} />
                                                                                        <div className="card-img-overlay">
                                                                                                <h5 className="card-title">{project.title}</h5>
                                                                                                <p className="card-text">{project.subtitle}</p>
                                                                                        </div>
                                                                                </div>
                                                                        </a>
                                                                ))}
                                                        </div>

                                                </div>
                                        </div>
                                </div>
                        </div>

                </section>
        );
}

export default Project;
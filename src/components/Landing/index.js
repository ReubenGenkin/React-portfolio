import React from 'react';
import './style.css';
import projects from "../projects.json"

function Landing(props) {

    return (



        <section id="Landing" className="col-md-12 container-fluid">

            <div className="row header-wrapper offset-1">
                <h2> Project Information</h2>
            </div>

            <div className="row sub-header-wrapper offset-1">
                {projects.filter(item => item.id == props.projId).map(filteredProject => (
                    <>
                        <h3>{filteredProject.title}</h3>

                        <span>{filteredProject.shortDes}</span>
                    </>

                ))
                }
            </div>

            <div className="row">
                <div className="col-md-4 offset-2">
                    {projects.filter(item => item.id == props.projId).map(filteredProject => (

                        <a href={filteredProject.link} className="btn-anchor">
                            <button className="btn">
                                <p className="btn-text">Deployed site</p>
                            </button>
                        </a>


                    ))
                    }
                </div>
                <div className="col-md-4 offset-2" >
                    {projects.filter(item => item.id == props.projId).map(filteredProject => (

                        <a href={filteredProject.github} className="btn-anchor">
                            <button className="btn">
                                <p className="btn-text">GitHub</p>
                            </button>
                        </a>


                    ))
                    }
                </div>
            </div>


        </section>





    )
}

export default Landing;
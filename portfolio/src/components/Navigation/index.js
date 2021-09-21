import React from 'react';
import Header from '../Header';
import './style.css'
//import useScrollPosition from '@react-hook/window-scroll'

function Navigation(props) {

    return (

        <nav id="nav" className={`fixed-top navbar navbar-expand-lg ${props.scrolling ? "nav-bar--hidden": ""}`}>
            <div className="container-fluid p-0">
                <a className="navbar-brand" href="#Home"> <Header scrollPast={props.scrollPast}/> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-expand-lg justify-content-end" id="navbarNavAltMarkup">
                
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#About" onClick={() => props.setPage("About")}>About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Project" onClick={() => props.setPage("Project")}>Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Skills" onClick={() => props.setPage("Skills")}>Skills</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Resume" onClick={() => props.setPage("Resume")}>Resume</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Contact" onClick={() => props.setPage("Contact")}>Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navigation;
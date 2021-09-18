import React from 'react';
import Header from '../Header';

function Navigation(props) {

    return (

        <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#About"> <Header /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#About" onClick={() => props.setPage("About")}>About</a>
                        <a className="nav-link" href="#Project" onClick={() => props.setPage("Project")}>Projects</a>
                        <a className="nav-link" href="#Contact" onClick={() => props.setPage("Contact")}>Contact</a>
                        <a className="nav-link" href="#Resume" onClick={() => props.setPage("Resume")}>Resume</a>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navigation;
import React from 'react';
import Header from '../Header';
import './style.css'

function Navigation(props) {

  return (

    // <nav id="nav" className={`fixed-top navbar navbar-expand-lg ${props.scrolling ? "nav-bar--hidden" : ""}`}>
    //   <div className="container-fluid p-0">
    //     <a className="navbar-brand" href="#Home"> <Header scrollPast={props.scrollPast} /> </a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

    //       <ul className="nav">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#About" onClick={() => props.setPage("About")}>About</a>
    //         </li>

    //         <li className="nav-item">
    //           <a className="nav-link" href="#Project" onClick={() => props.setPage("Project")}>Projects</a>
    //         </li>

    //         <li className="nav-item">
    //           <a className="nav-link" href="#Skills" onClick={() => props.setPage("Skills")}>Skills</a>
    //         </li>

    //         <li className="nav-item">
    //           <a className="nav-link" href="#Resume" onClick={() => props.setPage("Resume")}>Resume</a>
    //         </li>

    //         <li className="nav-item">
    //           <a className="nav-link" href="#Contact" onClick={() => props.setPage("Contact")}>Contact</a>
    //         </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className={`fixed-top navbar navbar-expand-sm ${props.scrolling ? "nav-bar--hidden" : ""}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home"> <Header scrollPast={props.scrollPast} /> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="offcanvasNavbar" className="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 nav-color-shift">
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
      </div>
    </nav>


  )
}

export default Navigation;
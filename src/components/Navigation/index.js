import React from 'react';
import Header from '../Header';
import './style.css'


function Navigation(props) {


  let arr = [
    "About",
    "Projects",
    "Skills",
    "Resume",
    "Contact"]
  function navBar(x) {
    return (
              arr.map((el)=>(
              <li className="nav-item">
              <a className="nav-link" onClick={()=> props.setLanding(false)} href={`#${el}`} >{el}</a>
              </li>
            )) 
    )
  }
  


  return (

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
              {navBar()}
            </ul>

          </div>
        </div>
      </div>
    </nav>


  )
}

export default Navigation;
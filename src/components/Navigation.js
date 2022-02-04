import React from "react";
import Header from "./Header";

function Navigation(props) {
  let arr = ["About", "Project", "Skills", "Resume", "Contact"];
  function navBar(x) {
    return arr.map((el) => (
      <li className="nav-item">
        <a
          className="nav-link navbar-list"
          onClick={() => props.setLanding(false)}
          href={`#${el}`}
        >
          {el}
        </a>
      </li>
    ));
  }

  return (
    <nav
      className={`navbar  ${
        props.scrolling ? "nav-bar--hidden" : ""
      } navbar-grid`}
    >
      <div className="container-fluid nav-logo">
        <a className="navbar-brand " href="#Home">
          {" "}
          <Header scrollPast={props.scrollPast} />{" "}
        </a>
      </div>

      <div className="nav-content">
        <ul className="nav-list-ul">{navBar()}</ul>
      </div>
    </nav>
  );
}

export default Navigation;

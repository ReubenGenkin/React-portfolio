import React from "react";
import "./style.css";
import projects from "./projects.json";

function Landing(props) {
  function landingEl() {
    let arr = [
      { name: "header", type: "header" },

      { name: "deploy", type: "button" },

      { name: "github", type: "button" },
    ];
    return arr.map((el) =>
      projects
        .filter((item) => item.id == props.projId)
        .map((filteredProject) => {
          return (
          el.type === "header" ? (
            <>
              <h3>{filteredProject.title}</h3>
              <span>{filteredProject.shortDes}</span>
            </>
          ) : el.type === "button" ? (
            <a href={filteredProject.link} className="btn-anchor">
              <button className="btn">
                <p className="btn-text">Deployed site </p>
              </button>
            </a>
          ) : null)
        })
    );
  }

  return (
    <section id="Landing" className="col-md-12 container-fluid">
      <div className="row header-wrapper offset-1">
        <h2> Project Information</h2>
      </div>

      <div className="row">
        <div className="col-md-4 offset-2">{landingEl()}</div>
      </div>
    </section>
  );
}

export default Landing;

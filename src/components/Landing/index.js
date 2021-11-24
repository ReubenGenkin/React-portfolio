import React from "react";
import "./style.css";
import projects from "../projects.json";

function Landing(props) {
  let arr = [
    { name: "header", type: "header" },

    { name: "deploy", type: "button" },

    { name: "github", type: "button" },
  ];
  function landingEl(x) {
    return arr.map((el) => (
      <div className="row">
        <div className="col-md-4 offset-2">
          {projects
            .filter((item) => item.id == props.projId)
            .map((filteredProject) => {
              if (el.type === "header") {
                <>
                  <h3>{filteredProject.title}</h3>

                  <span>{filteredProject.shortDes}</span>
                </>;
              } else {
                <a href={filteredProject.link} className="btn-anchor">
                  <button className="btn">
                    <p className="btn-text">Deployed site </p>
                  </button>
                </a>;
              }
            })}
        </div>
      </div>
    ));
  }

  return (
    <section id="Landing" className="col-md-12 container-fluid">
      <div className="row header-wrapper offset-1">
        <h2> Project Information</h2>
      </div>

      {landingEl()}

      {/* <div className="row sub-header-wrapper offset-1">
                {projects.filter(item => item.id == props.projId).map(filteredProject => (
                    

                ))
                }
            </div> */}
    </section>
  );
}

export default Landing;

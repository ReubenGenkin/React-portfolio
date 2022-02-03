import React from "react";
import projects from "./projects.json";
import Section from "./Section";

function Project(props) {
  return (
    <Section
      sectionId="Project"
      title="Projects"
      headerClassVal="projects"
      >
      
        <div className="card-wrapper row offset-1 w-90">
          {projects.map((project) => (
            <div className="card project-card col-md-3 border-0 projects-margin">
              <a className="project-link"></a>

              <a
                onClick={() => {
                  props.setLanding(true);
                  props.setProjId(project.id);
                }}
                className="project-link"
              >
                <div className="card-content">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.shortDes}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      
    </Section>
  );
}

export default Project;

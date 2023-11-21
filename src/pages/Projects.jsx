import React from "react";
import { nanoid } from "nanoid";

import Project from "../components/Projects/Project";
import projects from "../helpers/projectList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={nanoid()}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;

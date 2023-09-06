import React from "react";
import ListProjects from "./ListProjects";
import DownArrow from "./ui/DownArrow";
import UpArrow from "./ui/UpArrow";

const Projects = () => {
  return (
    <section class="projects" id="projects">
      <div class="projects-container">
        <UpArrow linkTarget="#about" />
        <h2>PROJECTS</h2>
        <div class="projects-list">
          <ListProjects />
          <DownArrow linkTarget="#contact" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

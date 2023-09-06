import React from "react";

const ListProjects = () => {
  const projectData = [
    {
      appName: "Legendary App",
      appDescription: (
        <>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis tempore eaque, quas voluptatibus tempora ea itaque
            dolore suscipit ducimus aspernatur.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis tempore eaque, quas voluptatibus tempora ea itaque
            dolore suscipit ducimus aspernatur.
          </p>
        </>
      ),
      demoLink: "#",
      codeLink: "#",
      projectScreenshot: "screenshot1.png",
      projectProcess: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            labore, hic alias saepe dignissimos impedit nulla laborum? Porro,
            pariatur ut.
          </p>
        </>
      ),
      projectChallenges: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            labore, hic alias saepe dignissimos impedinull a laborum? Porro,
            pariatur ut.
          </p>
        </>
      ),
      projectTechStack:
        "NodeJs, React, NextJS and other impressive technology.",
    },
    {
      appName: "Revolutionary App",
      appDescription: (
        <>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis tempore eaque, quas voluptatibus tempora ea itaque
            dolore suscipit ducimus aspernatur.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis tempore eaque, quas voluptatibus tempora ea itaque
            dolore suscipit ducimus aspernatur.
          </p>
        </>
      ),
      demoLink: "#",
      codeLink: "#",
      projectScreenshot: "screenshot1.png",
      projectProcess: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            labore, hic alias saepe dignissimos impedit nulla laborum? Porro,
            pariatur ut.
          </p>
        </>
      ),
      projectChallenges: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            labore, hic alias saepe dignissimos impedinull a laborum? Porro,
            pariatur ut.
          </p>
        </>
      ),
      projectTechStack:
        "NodeJs, React, NextJS and other impressive technology.",
    },
    {
      appName: "Mindblowing App",
      appDescription: (
        <>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis tempore eaque, quas voluptatibus tempora ea itaque
            dolore suscipit ducimus aspernatur.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis tempore eaque, quas voluptatibus tempora ea itaque
            dolore suscipit ducimus aspernatur.
          </p>
        </>
      ),
      demoLink: "#",
      codeLink: "#",
      projectScreenshot: "screenshot1.png",
      projectProcess: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            labore, hic alias saepe dignissimos impedit nulla laborum? Porro,
            pariatur ut.
          </p>
        </>
      ),
      projectChallenges: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            labore, hic alias saepe dignissimos impedinull a laborum? Porro,
            pariatur ut.
          </p>
        </>
      ),
      projectTechStack:
        "NodeJs, React, NextJS and other impressive technology.",
    },
  ];

  return projectData.map((project) => {
    return (
      <div class="project-card">
        <div class="project-pictures">
          <div class="img-one">
            <img src={project.projectScreenshot} class="project-img" />
            <div class="img-enlarge">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </div>
          </div>
          <a href={project.demoLink}>
            <i class="fa-solid fa-up-right-from-square fa-md"></i>LIVE DEMO
          </a>
          <a href={project.codeLink}>
            <i class="fa-brands fa-github fa-lg"></i>CODE
          </a>
        </div>
        <div class="project-description">
          <h3>{project.appName}</h3>
          <div class="mobile-links">
            <a href={project.demoLink}>
              <i class="fa-solid fa-up-right-from-square fa-md"></i>LIVE DEMO
            </a>
            <a href={project.codeLink}>
              <i class="fa-brands fa-github fa-lg"></i>CODE
            </a>
          </div>
          {project.appDescription}
          <div class="tech-stack">
            <div
              class="stack-badge dropdown-button"
              id="readmore"
              data-target="card1"
            >
              <i class="fa-solid fa-chevron-down"></i>
              Read More
            </div>
            <div class="read-more" id="card1">
              <div>
                <h4>Process</h4>
                {project.projectProcess}
                <h4>Challenges</h4>
                {project.projectChallenges}
                <h4>Tech stack</h4>
                {project.projectTechStack}
                <img src={project.projectScreenshot} class="mobile-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ListProjects;

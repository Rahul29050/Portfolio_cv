import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./Projects.css";

const projects = [
  {
    title: "Polling System - ReactJS",
    description:
      "A real-time polling system where users can create accounts, create polls, participate in public polls, receive live notifications, and view responses to their created polls.",
    stack: ["ReactJS"],
    github: "https://github.com/Rahul29050/Polling-App---React-JS",
    live: "https://your-live-link.com",
  },  {
    title: "Polling System - NodeJS",
    description:
      "A real-time polling system where users can create accounts, create polls, participate in public polls, receive live notifications, and view responses to their created polls.",
    stack: [ "Node.js", "Express.js", "Socket.io","2FA", "MongoDB"],
    github: "https://github.com/Rahul29050/Polling-App---Node-JS",
    live: "https://your-live-link.com",
  },
  {
    title: "iCreator.ai",
    description:
      "A template generation platform where users can log in using MSAL (Microsoft Authentication Library), search for templates, and download code based on selected templates. The app utilizes Microsoft Graph API and SharePoint for seamless integration and content access.",
    stack: ["ReactJS", "Graph API", "SharePoint", "MSAL"],
    github: "https://github.com/your-github",
    live: "https://your-live-link.com",
  },
  // {
  //   title: "Multi-FEIN",
  //   description:
  //     "An employee management application that sends automated notifications to managers when employees cross threshold working hours. Managers can view an overtime summary table, and employees can switch between two clients seamlessly. Integrated with various enterprise tools for performance and CI/CD pipeline.",
  //   stack: [
  //     "ReactJS",
  //     "ASP.NET",
  //     "MySQL",
  //     "AzureDB",
  //     "TeamCity",
  //     "Octopus",
  //     "New Relic"
  //   ],
  //   github: "https://github.com/your-github",
  //   live: "https://your-live-link.com",
  // },
];



const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project__inner" key={index}>
            {/* Project Header */}
            <div className="project__header">
              <h3 className="project__title">{project.title}</h3>
              <div className="project__links">
                <a href={project.github} aria-label="source code" className="link link--icon" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
                <a href={project.live} aria-label="live preview" className="link link--icon" target="_blank" rel="noopener noreferrer">
                  <LaunchIcon />
                </a>
              </div>
            </div>

            {/* Project Description */}
            <p className="project__description">{project.description}</p>

            {/* Tech Stack */}
            <ul className="project__stack">
              {project.stack.map((tech, i) => (
                <li key={i} className="project__stack-item">{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

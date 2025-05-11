import React from "react";
import "./Skills.css";

const skills = [
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "ASP.net Core",
  "MongoDB",
  "SQL",
  "TeamCity",
  "Octopus",
  "New-relic",
  "Azure Cloud",
  "Git",
  "GitHub",
  "Azure DevOps",
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills__list-item project__stack-item-2">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

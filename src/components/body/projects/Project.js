import React from "react";
import "./projects.css";
import img from "../../../assets/sam2.jpg";

export default function Project({
  mobile,
  name,
  description,
  image,
  link,
  tech,
}) {
  // debugger;
  return (
    <div className="projectContainer">
      <a href={link}>
        {!mobile && <img src={image} className="project-image"></img>}

        <div className="projectAbout">
          <div className="projectAbout-heading">{name}</div>
          {description}
          <div className="projectAbout-heading2">Tech Stack:</div>
          {tech}
        </div>
      </a>
    </div>
  );
}

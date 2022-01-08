import React from "react";
import Project from "./Project";
import sam1 from "../../../assets/sam1.jpg";
import potato from "../../../assets/potato.png";
import obj from "../../../assets/obj.png";
import reacti from "../../../assets/react.png";
import ll from "../../../assets/ll.png";

import "./projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Projects() {
  let projects = [
    {
      name: "Potato",
      description:
        "Enabling users to buy and sell used/unused items with ease based on the user location",
      link: "https://github.com/Andromeda227799/Potato/tree/master",
      tech: "React-native, Firebase",
      picSrc: potato,
    },
    {
      name: "OBJECT RECOGNITION",
      description:
        "Using ML into a java android application to be able to recognize real-time objects",
      link: "https://github.com/Andromeda227799/Object-Detection-Using-ML/tree/master",
      tech: "Andorid (Java), Tensorflow",
      picSrc: obj,
    },
    {
      name: "SamFolio",
      description: "My portfolio website :) ",
      link: "https://github.com/Andromeda227799/samFolio",
      tech: "React.js",
      picSrc: reacti,
    },
    {
      name: "MICRO MESSAGING",
      description:
        "Establishing real time communication between local users of the IDE",
      link: "",
      tech: "C++",
      picSrc: ll,
    },
  ];
  return (
    <div className="projectsContainer">
      <div className="projects-header">
        some of my recent works
        <p className="domain">PROJECTS</p>
      </div>
      <div className="projects-slider-desktop">
        {/* <Carousel > */}
        {projects.map((project) => {
          return (
            <Project
              name={project.name}
              description={project.description}
              link={project.link}
              tech={project.tech}
              image={project.picSrc}
            ></Project>
          );
        })}
        {/* </Carousel> */}
      </div>
      <div className="projects-slider-mobile">
        {/* <Carousel > */}
        {projects.map((project) => {
          return (
            <Project
              mobile
              name={project.name}
              description={project.description}
              link={project.link}
              tech={project.tech}
              image={project.picSrc}
            ></Project>
          );
        })}
        {/* </Carousel> */}
      </div>
    </div>
  );
}

export default Projects;

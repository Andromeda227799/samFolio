import React from 'react'
import { BsCodeSlash } from 'react-icons/bs';
import { FaDesktop } from 'react-icons/fa';

import { MdAppSettingsAlt } from 'react-icons/md';

import Domain from './domain';
import "./skills.css";
function Skills() {
    const style={color:"rgb(188,180,180)"};
    let webDevIcon=<FaDesktop size="2em"></FaDesktop>;
    let mobileDevIcon=<MdAppSettingsAlt size="2em"></MdAppSettingsAlt>;
    let webDevHeading="Web Dev";
    let mobileDevHeading="Mobile apps";
    let webDevText="I have a good experience with web frameworks like React, jQuery and Springboot";
    let mobileDevText="I also develop mobile apps with React-Native/Java"
    let cppIcon=<BsCodeSlash  size={"2em"} style={style}></BsCodeSlash>;
    let cppHeading="Data Structures";
    let cppText="In my free time I love solving real-world-like problems through Data Structures in C++";
    return (
        <div className="skills-container">
            I'm super familiar with
            <p className="domain">DOMAINS</p>
            <div className="skill-domain-container">
                <Domain icon={webDevIcon} heading={webDevHeading} text={webDevText}></Domain>
                <Domain icon={cppIcon} heading={cppHeading} text={cppText}></Domain>
                <Domain icon={mobileDevIcon} heading={mobileDevHeading} text={mobileDevText}></Domain>
            
            </div>
        </div>
    )
}

export default Skills

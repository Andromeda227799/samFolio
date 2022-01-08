import React from "react";
import "./about.css";
import img from "../../../assets/sam2.jpg";
import Button from "../../button";
function About() {
  return (
    <div className="container">
      <div className="leftt">
        <div className="text">
          <p className="about-intro">Let me introduce myself,</p>
          <br></br>
          <div className="aboutMe">
            <b>ABOUT ME</b>
            <br></br>
          </div>
          <div>My name is <span className="shamith">Shamith, </span></div>
          
          <br></br>I am a pre-final year at VIT Vellore. I develop Websites &
          Mobile apps<br></br>I love exploring the web and learn stuff 24/7
          <div className="buttonContainer">
            <Button light={true} text="Contact Now" href={"#social"}></Button>
          </div>
        </div>
      </div>
      <div className="picContainer">
        <img src={img} className="pic" alt={img}></img>
      </div>
    </div>
  );
}

export default About;

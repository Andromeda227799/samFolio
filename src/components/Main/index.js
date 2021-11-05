import React from "react";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";
import { useState } from "react";
import "./home.css";
import LeftTat from "../leftTat";

export default function Main() {
  const [ sidebar, setSidebar ] = useState(false);
  return (
    <div className="main"> 
      <div>
        <LeftTat></LeftTat>
      </div>
      <div>
        <Header sidebar={sidebar} setSidebar={setSidebar}></Header>
      </div>
      <div onClick={()=>{if(sidebar){ setSidebar(false)}}}>
        <Body ></Body>
      </div>
      <div style={{backgroundColor:"rgb(38,38,38)"}}>
        <Footer onClick={()=>{if(sidebar){setSidebar(false)}}}></Footer>
      </div>
    </div>
  );
}

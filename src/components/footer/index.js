import React from "react";
import { BsLinkedin,BsWhatsapp,BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import{CgFormatSlash} from "react-icons/cg";
import {IoMdCall} from "react-icons/io"
// import SocialLink from "../SocialLink";
import SocialLink from "../socialLink";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-heading">LET'S CONNECT!</div>
        <div className="footer-description-text">Interested in working together? We should queue up a chat. I’ll buy the coffee.</div>
      </div>
      <div className="footer-right">
        <div className="row1">
          <SocialLink
            icon={<SiGmail size={"2em"}></SiGmail>}
            heading={"shamith2709@gmail.com"}
            h={"mailto: shamith2709@gmail.com"}
          ></SocialLink>
          <SocialLink
            icon={<BsLinkedin size={"2em"}></BsLinkedin>}
            heading={"linkedin.com/in/shamith-rao/"}
            h={"https://www.linkedin.com/in/shamith-rao/"}
          ></SocialLink>
        </div>
        <div className="row1">
          <SocialLink
            icon={<div><BsWhatsapp size={"1.6em"}></BsWhatsapp><CgFormatSlash size="1.7em"></CgFormatSlash><IoMdCall size="1.7em"></IoMdCall></div>}
            heading={"+91 8197100734"}
            h={"tel:+91 8197100734"}
          ></SocialLink>
          <SocialLink
            icon={<BsFacebook size={"2em"}></BsFacebook>}
            heading={"facebook.com/shamith.rao.5/"}
            h={"https://www.facebook.com/shamith.rao.5/"}
          ></SocialLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;

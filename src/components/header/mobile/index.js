import React from "react";
import { ImCross,BiArchive,AiOutlineTrophy ,BsFillInfoCircleFill,IoShareSocialSharp } from "react-icons/all";
import "./mobileHeader.css";
import MobileHeaderTag from "./mobileHeaderTag";
function mobileHeader({ sidebar, setSidebar }) {
  return (
    <div className="sidePanel">
      <div className="closeIcon">
        <ImCross
        size="1.25em"
        color="rgb(188,180,180)"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        ></ImCross>
      </div>
      <div onClick={() => {
            setSidebar(!sidebar);
          }} className="options">
      <MobileHeaderTag h="#about" text="About" icon={<BsFillInfoCircleFill size="0.9em" className="icon"/>}></MobileHeaderTag>
          
      <MobileHeaderTag  h="#project" text="Projects" icon={<BiArchive size="0.9em" className="icon"/>}></MobileHeaderTag>
          <MobileHeaderTag h="#work" text="Achievements" icon={<AiOutlineTrophy size="0.9em" className="icon"/>}></MobileHeaderTag>
          <MobileHeaderTag h="#social"text="Social" icon={<IoShareSocialSharp size="0.9em" className="icon"/>}></MobileHeaderTag>
      </div>
    </div>
  );
}

export default mobileHeader;

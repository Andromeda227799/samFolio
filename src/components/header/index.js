import React from "react";
import "./header.css"
import MobileHeader from "./mobile";
import WebHeader from "./web";


import { FiMenu,BiArchive,AiOutlineTrophy ,BsFillInfoCircleFill,IoShareSocialSharp} from "react-icons/all";
 function Header({sidebar,setSidebar}) {
  
  return (
    <div className="header" >
     <div className="menu">
        <div className="webMenu">
        <WebHeader text="About" icon={<BsFillInfoCircleFill size="0.8em" className="icon"/>}></WebHeader>
          <WebHeader text="Projects" icon={<BiArchive size="0.9em" className="icon"/>}></WebHeader>
          <WebHeader text="Achievements" icon={<AiOutlineTrophy size="0.9em" className="icon"/>}></WebHeader>
          
          <WebHeader text="Social" icon={<IoShareSocialSharp size="0.9em" className="icon"/>}></WebHeader>
        </div>
        <div className="mobileMenu">
          <div className="menuIcon">
            <FiMenu
            size="2em"
            color="rgb(188,180,180)"
              onClick={() => {
                setSidebar(!sidebar);
              }}
            ></FiMenu>
          </div>
          <div>{sidebar && <MobileHeader sidebar={sidebar} setSidebar={setSidebar} />}</div>
        </div>
      </div>
    </div>
  );
}
export default Header;
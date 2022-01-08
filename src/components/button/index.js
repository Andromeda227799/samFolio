import React from "react";
import "./button.css";
function Button({ text ,href}) {
  return (
    <div className="light">
          <a href={href}>
            <span>{text}</span>
          </a>
        </div>
  );
}

export default Button;

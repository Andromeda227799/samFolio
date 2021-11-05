import React from 'react'
import "./webHeader.css"
function webHeader({text,icon,h}) {
    return (
        <div className="webHeaderTag">
            {icon}
            <a href={"#"+text.toLowerCase()}>{text}</a>
        </div>
    )
}

export default webHeader

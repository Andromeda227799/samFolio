import React from 'react'
import "./domain.css"
function Domain({icon,heading,text}) {
    return (
        <div className="domain-container">
            {icon}
            <p className="domain-heading">{heading}</p>
            <p className="domain-text">{text}</p>
            
            
        </div>
    )
}

export default Domain

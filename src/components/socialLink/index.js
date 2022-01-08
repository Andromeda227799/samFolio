
import React from 'react'
import "./socialLink.css"
function SocialLink({icon,h,heading}) {
    return (
        <div className="sl-container">
            {icon}
            <a href={h} className="sl-heading">{heading}</a>
                
            
        </div>
    )
}

export default SocialLink


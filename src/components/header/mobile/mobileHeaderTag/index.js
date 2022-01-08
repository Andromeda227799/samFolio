import React from 'react'
import "./mobileHeaderTag.css"
function MobileHeaderTag({text,icon,h}) {
    return (
        <div className="mobileHeaderTag">
            {icon}
            <a href={h}>{text}</a>
        </div>
    )
}

export default MobileHeaderTag

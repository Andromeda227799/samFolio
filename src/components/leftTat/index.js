import React from 'react'
import img from "../../assets/arrow.png";
import "./tat.css"
function LeftTat() {
    return (
        <div className="Left">
            SCROLL
            <img className="img" src={img} alt={img}></img>
        </div>
    )
}

export default LeftTat

import React from "react";
import "../style/FlowStyle.css";


const StyleContainer = ({image, header}) => {
    return(
        <button id="btn" className="style-container">
            <img className="image" src={image}></img>
            <h2 className="header">{header}</h2>
        </button>
    )
}

export default StyleContainer;
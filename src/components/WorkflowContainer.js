import React from "react";
import '../style/WorkflowContainer.css'

const WorkflowContainer = ({image, header, text}) => {
    return(
        <div className="about-container">
            <div className="illustration" style={{backgroundImage: `url(${image})`}}></div>
            <h3 className="header">{header}</h3>
            <div className="text">{text}</div>
        </div>
    )
}

export default WorkflowContainer;
import React from "react";
import { Link } from "react-router-dom";

import '../style/Flow.css';

const Flow = ({children, header, link}) => {
    return(
        <div>
            <h1>{header}</h1>
            <div className="content">
                {children}
            </div>
            <Link className="continue-btn" to={`${link}`}>Continue</Link>
        </div>
    )
}

export default Flow;
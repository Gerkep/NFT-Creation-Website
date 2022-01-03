import React from "react";

import '../style/Flow.css';

const Flow = ({children, header}) => {
    return(
        <div>
            <h1 className="flow-header">{header}</h1>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Flow;
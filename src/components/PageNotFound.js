import React from "react";
import { Link } from "react-router-dom";
import "../style/PageNotFound.css"

const PageNotFound = () => {
    return(
        <div className="page-not-found">
            <h1 className=" error-text">Page not found</h1>
            <div className="not-found-image"></div>
            <Link to="/" className="back-link">Back to <p className="colorful-text">homepage</p></Link>
        </div>
    )
}

export default PageNotFound;
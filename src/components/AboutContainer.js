import React from "react";
import '../style/AboutContainer.css'

const AboutContainer = ({image, header, text}) => {
    return(
        <div className="about-container">
            <div className="illustration" style={{backgroundImage: `url(${image})`}}></div>
            <h3 className="header">What is an NFT?</h3>
            <div className="text">NFT stands for Non-fungible token. <a href="">Learn more</a></div>
        </div>
    )
}

export default AboutContainer;
import React from "react";
import Flow from './Flow';
import StyleContainer from "./StyleContainer";

import cryptoPunk from '../images/cryptopunk.png';
import boredApe from '../images/boredape.png';
import otherArt from '../images/otherArt.jpeg';

const ProjectStyle = () => {
    return(
        <div>
            <Flow header="Which style matches your vision?" link="/project/description">
                <StyleContainer image={cryptoPunk} header="Pixel"></StyleContainer><br/>
                <StyleContainer image={boredApe} header="Cartoon"></StyleContainer><br/>
                <button onClick={() => alert("If you have other idea contact us first at email: nfties@gmail.com or fill the contact form(link in footer on main page)")} id="btn" className="style-container">
                    <img className="image" alt="style representation" src={otherArt}></img>
                    <h2 className="header">Other</h2>
                </button>
            </Flow>
        </div>
    )
}

export default ProjectStyle;
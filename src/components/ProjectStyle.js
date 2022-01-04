import React from "react";
import Flow from './Flow';
import StyleContainer from "./StyleConrainer";

import cryptoPunk from '../images/cryptopunk.png';
import boredApe from '../images/boredape.png';
import otherArt from '../images/otherArt.jpeg';

const ProjectStyle = () => {
    return(
        <div>
            <Flow header="Which style matches your vision?" link="/project/description">
                <StyleContainer image={cryptoPunk} header="Pixel"></StyleContainer><br/>
                <StyleContainer image={boredApe} header="Cartoon"></StyleContainer><br/>
                <StyleContainer image={otherArt} header="Other"></StyleContainer><br/>
            </Flow>
        </div>
    )
}

export default ProjectStyle;
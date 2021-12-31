import React from "react";
import Flow from './Flow';
import StyleContainer from "./StyleConrainer";

import cryptoPunk from '../images/cryptopunk.png'

const ProjectStyle = () => {
    return(
        <div>
            <Flow header="Which style matches Your vision?" link="/project/description">
                <StyleContainer image={cryptoPunk} header="Pixel"></StyleContainer><br/>
                <StyleContainer image={cryptoPunk} header="3D"></StyleContainer><br/>
                <StyleContainer image={cryptoPunk} header="Pixel"></StyleContainer><br/>
                <StyleContainer image={cryptoPunk} header="Pixel"></StyleContainer><br/>
            </Flow>
        </div>
    )
}

export default ProjectStyle;
import React from "react";
import Flow from './Flow';
import OfferCard from "./OfferCard";

const ProjectSize = () => {
    return(
        <div>
            <Flow header="Choose project." link="/project/style">
                <OfferCard name="Basic" characters={1} charactersFormat="(.png,  .psd)" delivery={5} revisions={3} price={39.99}/><br/>
                <OfferCard name="Pro" characters="1K" delivery={8} revisions={5} price={299.99} pro={true}/><br/>
                <OfferCard name="Max" characters="10K" delivery={10} revisions={7} price={1239}/><br/>
            </Flow>
        </div>
    )
}

export default ProjectSize;
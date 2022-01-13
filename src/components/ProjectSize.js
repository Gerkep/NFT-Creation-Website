import React from "react";
import Flow from './Flow';
import OfferCard from "./OfferCard";

const ProjectSize = () => {
    return(
        <div className="summary-background">
            <Flow header="Choose project." link="/project/style">
            <OfferCard name="Basic" characters={1}ś delivery={5} revisions={2} price={49.99}/>
            <OfferCard name="Pro" characters="1K" delivery={8} revisions={4} price={1499}/>
            <OfferCard name="Max" characters="10K" delivery={14} revisions={6} price={3799} pro={true}/>
            </Flow>
        </div>
    )
}

export default ProjectSize;
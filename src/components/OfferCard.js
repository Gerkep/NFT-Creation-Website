import React from "react";
import { connect } from "react-redux";
import { selectProject } from "../actions";
import '../style/OfferCard.css';

const OfferCard = ({name, characters, charactersFormat, delivery, revisions, price, pro, selectProject}) => {

    const isPro = () =>{
        if(pro){
            return "pro"
        }
    }
    const costPerNFT = () => {
        if(name==="Pro"){
            return <p className="price-piece">($1,5/art)</p>
        }else if(name==="Max"){
            return <p className="price-piece">($0,38/art)</p>
        }
    }

    return(
        <div>
            <div className="offer-card">
                <h2 className="name">{name}</h2>
                <div className="detail number"><b className="colorful-text">{characters}</b> {characters === 1 ? "character" : "characters"} <span className="format">{charactersFormat}</span></div>
               
                <div className="detail delivery">Delivery in <b className="colorful-text">{delivery}</b> days*</div>
                <div className="detail revisions">Up to <b className="colorful-text">{revisions}</b> revisions*</div>
                <div className="detail revisions"><b className="colorful-text">+</b>Video guide "how to mint NFT"</div>
                <div className="detail price">${price}{costPerNFT()}</div>
                <button onClick={() => selectProject(name, price)} className={`button ${isPro()}`}>Choose</button>
                <p className="note">*May vary depending on the complexity of the project.</p>
            </div>
        </div>
    )
}

export default connect(null, {selectProject})(OfferCard);
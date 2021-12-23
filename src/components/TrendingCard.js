import React from "react";
import '../style/TrendingCard.css';

const TrendingCard = ({name, picture, price, link}) => {
    return(
        <div className="card" style={{backgroundImage: `url(${picture})`}}>
            <div className="description">
                <h3 className="name-nft">{name}</h3>
                <div className="price-nft">price:<span className="colorful-text"> {price}</span></div>
                <a className="link" href="#"><span className="colorful-text">OpenSea</span></a>
            </div>
        </div>
    )
}

export default TrendingCard;
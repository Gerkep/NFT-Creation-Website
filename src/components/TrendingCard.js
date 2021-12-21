import React from "react";
import '../style/TrendingCard.css';

const TrendingCard = () => {
    return(
        <div className="card">
            <div className="description">
                <h3 className="name-nft">CryptoPunk #7523</h3>
                <div className="price-nft">price:<span className="colorful-text"> $532M</span></div>
                <button className="link"><span className="colorful-text">OpenSea</span></button>
            </div>
        </div>
    )
}

export default TrendingCard;
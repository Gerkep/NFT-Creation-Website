import React from "react";
import '../style/TrendingCard.css';

const TrendingCard = () => {
    return(
        <div className="card">
            <div className="description">
                <h3 className="name">CryptoPunks</h3>
                <div className="price">floor:<span className="colorful-text"> $532M</span></div>
                <button className="link">OpenSea</button>
            </div>
        </div>
    )
}

export default TrendingCard;
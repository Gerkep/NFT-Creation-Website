import React from "react";
import '../style/App.css';

const App = () =>{
    return(
        <div className="main-page">

            <div className="navbar">
                <p className="logo">NFTArt</p>
                <div className="links">
                    <a className="nav-link" href="#">About NFT's</a>
                    <a className="nav-link" href="#">Getting started</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link" href="#">Consultation</a>
                </div>
                <button className="btn nav-btn">Get started!</button>
            </div>

            <div className="welcome-page">
                <div className="welcome-text">
                    <div className="slogan">
                        <h1>Bring Your idea<br className="slogan-br"/> to <span className="colorful-text">NFT art.</span></h1>
                        <h3 className="desktop-description">We gathered best designers to create beautiful art designed to become NFT.</h3>
                        <button className="btn desktop-main-btn"></button>
                    </div>
                </div>
                <div className="main-img">
                    <div className="eth-illustration"></div>
                </div>
            </div>
            <button className="btn mobile-main-btn">Get started!</button>

        </div>
    )
}

export default App;
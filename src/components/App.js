import React from "react";
import '../style/App.css';
import OfferCard from "./OfferCard";
import AboutContainer from "./AboutContainer";
import pictureIllustration from "../images/picture-dynamic-gradient.png"

const App = () =>{
    return(
        <div className="main-page">

            <div className="navbar">
                <p className="logo">Nart</p>
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
                        <h3 className="desktop-description">We gathered best designers to create<br/> beautiful art designed to become NFT.</h3>
                        <button className="btn desktop-main-btn">Get started!</button>
                    </div>
                </div>
                <div className="main-img">
                    <div className="eth-illustration"></div>
                </div>
            </div>
            <button className="btn mobile-main-btn">Get started!</button>

            <div className="section offer-section">
                <h2 className="section-header">Choose project.</h2>
                <OfferCard name="Basic" characters={1} charactersFormat="(.png,  .psd)" delivery={5} revisions={3} price={39.99}/>
                <OfferCard name="Pro" characters="1K" delivery={8} revisions={5} price={299.99} pro={true}/>
                <OfferCard name="Max" characters="10K" delivery={10} revisions={7} price={1239}/>
            </div>
            <div className="section about-section">
                <h2 className="section-header">Explore NFT.</h2>
                <AboutContainer image={pictureIllustration} header="" text=""/>
                <AboutContainer image="" header="" text=""/>
                <AboutContainer image="" header="" text=""/>
            </div>
        </div>
    )
}

export default App;
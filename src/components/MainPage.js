import React from "react";
import '../style/App.css';
import {Link} from 'react-router-dom';

import OfferCard from "./OfferCard";
import WorkflowContainer from "./WorkflowContainer";
// import TrendingCard from "./TrendingCard";
import contactIllustration from "../images/chat-dynamic-gradient.png";
import paintingIllustration from "../images/paint-brush-dynamic-gradient.png";
import axeIllustration from "../images/axe-dynamic-gradient.png";
// import boredApe from "../images/boredape.png";
// import cryptoPunk from "../images/cryptopunk.png";

const MainPage = () => {
    return(
        <div className="main-page">

        <div className="navbar">
            <p className="logo">NFTiece</p>
            <Link to="/project" className="btn nav-btn">Get started!</Link>
        </div>

        <div className="welcome-page">
            <div className="welcome-text">
                <div className="slogan">
                    <h1>We bring Your <br/>idea to <span className="colorful-text">NFT art.</span></h1>
                    <h3 className="desktop-description">We gathered best designers to create<br/> beautiful art designed to become NFT.</h3>
                    <Link to="/project" className="btn desktop-main-btn">Get started!</Link>
                </div>
            </div>
            <div className="main-img">
                <div className="eth-illustration"></div>
            </div>
        </div>
        <Link to="/project" className="btn mobile-btn">Get started!</Link>

        <div className="section offer-section">
            <h2 className="section-header">Choose project.</h2>
            <OfferCard name="Basic" characters={1}ś delivery={5} revisions={2} price={49.99}/>
            <OfferCard name="Pro" characters="1K" delivery={8} revisions={4} price={1499}/>
            <OfferCard name="Max" characters="10K" delivery={14} revisions={6} price={3799} pro={true}/>
        </div>
        <div className="section about-section">
            <h2 className="section-header">How it works?</h2>
            <div className="workflow-section">
                <WorkflowContainer image={contactIllustration} header="Contact us" text="Fill the form in our website and describe as good as you can your desired outcome."/>
                <WorkflowContainer image={paintingIllustration} header="Wait..." text="Wait up to one week while professionals chosen specifically for your needs create your art."/>
                <WorkflowContainer image={axeIllustration} header="Done! Let's mint it!" text="Your art is ready! Let's mint it and give yourself a chance to become the next millionaire made by NFT!"/>
            </div>
            
        </div>
        <div className="section hook-section">
            <h2 className="section-header">NFT BOOM is coming!</h2>
            <div className="hook-container">
                <div className="best-illustration"></div>
                <div className="hook-content">
                    <div className="hook">
                        Year <span className="colorful-text">2022</span> is expected to be <br className="mobile-br"/><span className="colorful-text">the best year for NFT's</span>, 
                        so if you have an idea for NFT don't wait and join this big trend! 
                        Reach us out and become next NFT millionaire.
                        Don't miss the opportunity. <br className="mobile-br"/><span className="colorful-text">You are still early!</span>
                    </div>
                    <Link to="/project" className="btn mobile-btn" id="hook-btn">Get started!</Link>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-logo">LOGO</div>
            <div className="footer-navbar">
                <Link to="/project" className="footer-link" href="">Let's design!</Link>
                <a className="footer-link" href="">Pricing</a>
                <a className="footer-link" href="">Workflow</a>
            </div>
            <div className="social-media">
                    <a className="media-icon twitter" href=""></a>
                    <a className="media-icon instagram" href=""></a>
                    <a className="media-icon facebook" href=""></a>
            </div>
        </div>
        <div className="footer-under">
            <div className="payment-methods">
                <div className="payment-icon">P</div>
                <div className="payment-icon">P</div>
            </div>
            <div className="copyright">@2022 Piotr Gerke</div>
        </div>
        
        </div> 
    )
}

export default MainPage;
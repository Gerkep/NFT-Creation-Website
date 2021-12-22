import React from "react";
import '../style/App.css';
import OfferCard from "./OfferCard";
import WorkflowContainer from "./WorkflowContainer";
import TrendingCard from "./TrendingCard";
import contactIllustration from "../images/chat-dynamic-gradient.png";
import paintingIllustration from "../images/paint-brush-dynamic-gradient.png";
import axeIllustration from "../images/axe-dynamic-gradient.png";
import boredApe from "../images/boredape.png";
import cryptoPunk from "../images/cryptopunk.png";

const App = () =>{
    return(
        <div className="main-page">

            <div className="navbar">
                <p className="logo">Pixel Factory</p>
                <div className="links">
                    <a href="" className="nav-link">Price</a>
                    <a href="" className="nav-link">Workflow</a>
                    <a href="" className="nav-link">Abou NFT</a>
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
            <button className="btn mobile-btn">Get started!</button>

            <div className="section offer-section">
                <h2 className="section-header">Choose project.</h2>
                <OfferCard name="Basic" characters={1} charactersFormat="(.png,  .psd)" delivery={5} revisions={3} price={39.99}/>
                <OfferCard name="Pro" characters="1K" delivery={8} revisions={5} price={299.99} pro={true}/>
                <OfferCard name="Max" characters="10K" delivery={10} revisions={7} price={1239}/>
            </div>
            <div className="section about-section">
                <h2 className="section-header">How it works?</h2>
                <WorkflowContainer image={contactIllustration} header="Contact us" text="Fill the form in our website and describe as good as you can your desired outcome."/>
                <WorkflowContainer image={paintingIllustration} header="Wait..." text="Wait up to one week while professionals chosen specifically for your needs create your art."/>
                <WorkflowContainer image={axeIllustration} header="Done! Let's mint it!" text="Your art is ready! Let's mint it and give yourself a chance to become the next millionaire made by NFT!"/>
            </div>
            <div className="section trending-section">
                <h2 className="section-header">Hottest NFT's.</h2>
                <div className="trending">
                    <TrendingCard picture={boredApe} name="Bored Ape #2087"/>
                    <TrendingCard picture={cryptoPunk} name="CryptoPunk #7523"/>
                    <TrendingCard picture="" header=""/>
                    <TrendingCard picture="" header=""/>
                    <TrendingCard picture="" header=""/>
                </div>
                <p className="next-text"><span className="colorful-text">Your might be next!</span></p>
            </div>
            <div className="section hook-section">
                <h2 className="section-header">NFT BOOM is coming!</h2>
                <div className="hook-container">
                    <div className="best-illustration"></div>
                    <div className="hook-content">
                        <div className="hook">
                            Year <span className="colorful-text">2022</span> is expected to be <span className="colorful-text">the best year for NFT's</span>, 
                            so if you have an idea for NFT don't wait and join this big trend! 
                            Reach us out and become next NFT millionaire.
                            Don't miss the opportunity. <span className="colorful-text">We are still early!</span>
                        </div>
                        <button className="btn mobile-btn" id="hook-btn">Get started!</button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div>LOGO</div>

            <div className="social-media">

                    <a className="media-icon twitter" href=""></a>
                    <a className="media-icon instagram" href=""></a>
                    <a className="media-icon facebook" href=""></a>
                </div>
                <div className="payment-methods">
                    <p>Payment methods</p>
                    <div className="payment-icon"></div>
                    <div className="payment-icon"></div>
                </div>
                <div className="copyright">@2022 Piotr Gerke</div>
            </div>
        </div> 
    )
}

export default App;
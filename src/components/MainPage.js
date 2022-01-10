import React from "react";
import '../style/App.css';
import {Link} from 'react-router-dom';

import Modal from "./Modal";
import OfferCard from "./OfferCard";
import WorkflowContainer from "./WorkflowContainer";
import contactIllustration from "../images/chat-dynamic-gradient.png";
import paintingIllustration from "../images/paint-brush-dynamic-gradient.png";
import axeIllustration from "../images/axe-dynamic-gradient.png";


const MainPage = () => {
    return(
        <div className="main-page">

        <div className="navbar">
            <p className="logo">NFTiece</p>
            <Link to="/project" className="btn nav-btn"><span className="btn-text">Get Started!</span></Link>
        </div>

        <div className="welcome-page">
            <div className="welcome-text">
                <div className="slogan">
                    <h1>We bring Your <br/>idea to <span className="colorful-text">NFT art.</span></h1>
                    <h3 className="desktop-description">We gathered best designers to create<br/> beautiful art designed to become NFT.</h3>
                    <Link to="/project" className="btn desktop-main-btn"><span className="btn-text">Get Started!</span></Link>
                </div>
            </div>
            <div className="main-img">
                <div className="eth-illustration"></div>
            </div>
        </div>
        <Link to="/project" className="btn mobile-btn"><span className="btn-text">Get Started!</span></Link>

        <div className="section offer-section">
            <h2 className="section-header">Choose project.</h2>
            <OfferCard name="Basic" characters={1}ś delivery={5} revisions={2} price={49.99}/>
            <OfferCard name="Pro" characters="1K" delivery={8} revisions={4} price={1499}/>
            <OfferCard name="Max" characters="10K" delivery={14} revisions={6} price={3799} pro={true}/>
        </div>
        <div className="section about-section">
            <h2 className="section-header">It's simple!</h2>
            <div className="workflow-section">
                <WorkflowContainer image={contactIllustration} header="Contact us" text="Fill the form in our website and describe as good as you can your desired outcome."/>
                <WorkflowContainer image={paintingIllustration} header="Wait..." text="Wait up to one week while professionals chosen specifically for your needs create your art."/>
                <WorkflowContainer image={axeIllustration} header="Done! Let's mint it!" text="Your art is ready! Let's mint it and give yourself a chance to become the next millionaire made by NFT!"/>
            </div>
        </div>
        <div className="section about-nfts-section">
            <h2 className="section-header">About NFT art</h2>
            <div className="about-nft-container">
                <div className="nfts-image"></div>
                <div className="about-nfts-content">
                    <p>An NFT(non-fungible token), is a unique digital representation of a good — for our purposes, a work of art. It's akin to a certificate of authenticity or a deed and it's recorded on a blockchain. <br/><br/>
                        It ensures, that every art is one of a kind. Thanks to scarcity that it arouses, NFT art can be very pricey, that's why more and more people are trying to get on the train and earn millions. So don't wait. Start designing your NFT today!
                    </p>
                </div>
            </div>
        </div>
        <div className="section hook-section">
            <h2 className="section-header">NFT BOOM is here!</h2>
            <div className="hook-container">
                <div className="hook-content">
                        <p className="hook">Year <span className="colorful-text">2022</span> is expected to be <br className="mobile-br"/><span className="colorful-text">the best year for NFT's</span>,<br className="desktop-br"/> 
                        so if you have an idea for NFT don't wait and join this big trend! 
                        Reach us out and become next NFT millionaire.
                        Don't miss the opportunity. <br/><span className="colorful-text">You are still early!</span></p>
                    <Link to="/project" className="btn mobile-btn" id="hook-btn"><span className="btn-text">Get Started!</span></Link>
                </div>
                <div className="best-illustration"></div>
            </div>
        </div>
        <div className="footer">
            <p className="logo footer-logo">NFTiece</p>
            <div className="footer-navbar">
                    <Link to="/project" className="footer-link footer-link-desktop" href="">Design</Link>
                    <a className="footer-link footer-link-desktop" href="">Pricing</a>
                    <a className="footer-link" href="">Privacy policy</a>
                    <a className="footer-link footer-link-desktop" href="">Workflow</a>
                    <a className="footer-link" href="">Contact us</a>
            </div>
            <div className="social-media">
                    <a className="media-icon twitter" href=""></a>
                    <a className="media-icon instagram" href=""></a>
                    <a className="media-icon facebook" href=""></a>
            </div>

        </div>
        <div className="footer-under">
        <div className="copyright">Designed and developed by Piotr Gerke</div>
            <div className="payment-methods">
                <div className="payment-icon" id="payment-method-1"></div>
                <div className="payment-icon" id="payment-method-2"></div>
            </div>
            
        </div>
        <Modal />
        </div> 
    )
}

export default MainPage;
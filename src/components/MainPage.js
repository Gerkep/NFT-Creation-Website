import React from "react";
import '../style/App.css';
import {Link} from 'react-router-dom';

import OfferCard from "./OfferCard";
import WorkflowContainer from "./WorkflowContainer";
import contactIllustration from "../images/chat-dynamic-gradient.png";
import paintingIllustration from "../images/paint-brush-dynamic-gradient.png";
import axeIllustration from "../images/axe-dynamic-gradient.png";


const MainPage = () => {
    return(
        <div className="main-page">

        <div className="navbar">
            <p className="logo">Nftiece</p>
            <Link to="/project" className="btn nav-btn"><span className="btn-text">Get Started!</span></Link>
        </div>

        <div className="welcome-page">
            <div className="welcome-text">
                <div className="slogan">
                    <h1>Best art for your <br/> <span className="colorful-text">NFT project.</span></h1>
                    <h3 className="desktop-description">We gathered the finest designers in the space<br/> to help you join web3 revolution.</h3>
                    <Link to="/project" className="btn desktop-main-btn"><span className="btn-text">Get Started!</span></Link>
                </div>
            </div>
            <div className="main-img">
                <div className="eth-illustration"></div>
            </div>
        </div>
        <Link to="/project" className="btn mobile-btn"><span className="btn-text">Get Started!</span></Link>

        <div className="section about-section" id="workflow">
            <h2 className="section-header">It's <span className="colorful-text">simple!</span></h2>
            <div className="workflow-section">
                <WorkflowContainer image={contactIllustration} header="Contact us" text="Place an order on our website and describe your idea as good as possible to avoid unnecessary revisions."/>
                <WorkflowContainer image={paintingIllustration} header="Wait..." text="Wait while professionals chosen specifically for your needs create your art. We will be in touch to deliver art, that meets you expectations."/>
                <WorkflowContainer image={axeIllustration} header="Done! Let's mint it!" text="Your art is ready! Let's put it into blockchain, mint it and give yourself a chance to become the next millionaire made by NFT!"/>
            </div>
        </div>
        <div className="section offer-section" id="pricing">
            <h2 className="section-header"><span className="colorful-text">Choose</span> a project</h2>
            <OfferCard name="Basic" characters={1} delivery={5} revisions={2} price={49.99}/>
            <OfferCard name="Pro" characters="1K" delivery={8} revisions={4} price={1499}/>
            <OfferCard name="Max" characters="10K" delivery={14} revisions={6} price={3799} pro={true}/>
        </div>
        <div className="section about-nfts-section">
            <h2 className="section-header">About <span className="colorful-text">NFT art</span></h2>
            <div className="about-nft-container">
                <div className="nfts-image"></div>
                <div className="about-nfts-content">
                    <p>An NFT(non-fungible token), is a unique digital representation of a good — for our purposes, a work of art. It's akin to a certificate of authenticity or a deed and it's recorded on a blockchain. <br/><br/>
                        It ensures, that every art is one of a kind. Thanks to scarcity it creates, NFT art can be very pricey, that's why more and more people are trying to get on the train and earn millions. Don't miss the opportunity. Start designing your NFT project today!
                    </p>
                </div>
            </div>
        </div>
        <div className="section hook-section">
            <h2 className="section-header">NFT <span className="colorful-text">BOOM</span> is here!</h2>
            <div className="hook-container">
            <div className="best-illustration" id="mobile-illustration"></div>
                <div className="hook-content">
                        <p className="hook">Year <span className="colorful-text">2022</span> is expected to be <br className="mobile-br"/><span className="colorful-text">the best year for NFT's</span>,<br className="desktop-br"/> 
                        so if you have an idea for NFT don't wait and join this big trend! 
                        Place an order and become the next NFT millionaire.
                        Don't miss the opportunity. <br/><span className="colorful-text">You are still early!</span></p>
                    <Link to="/project" className="btn mobile-btn" id="hook-btn"><span className="btn-text">Get Started!</span></Link>
                </div>
                <div className="best-illustration" id="desktop-illustration"></div>
            </div>
        </div>
        <div className="footer">
            <p className="logo footer-logo">Nftiece</p>
            <div className="footer-navbar">
                    <Link to="/project" className="footer-link footer-link-desktop" href="">Design</Link>
                    <a className="footer-link footer-link-desktop" href="#pricing">Pricing</a>
                    <a className="footer-link" href="https://www.notion.so/Privacy-policy-aed78a3556664f7f8b6b09f07ef71440">Privacy policy</a>
                    <a className="footer-link footer-link-desktop" href="#workflow">Workflow</a>
                    <Link className="footer-link" to="/main/contact">Contact us</Link>
            </div>
            <div className="social-media">
                    <a className="media-icon twitter" href="https://twitter.com/nftiece1"> </a>
                    <a className="media-icon instagram" href="https://www.instagram.com/nftiece/"> </a>
                    <a className="media-icon tiktok" href="https://www.tiktok.com/@nftiece"> </a>
            </div>

        </div>
        <div className="footer-under">
        <div className="copyright">Designed and developed by Piotr Gerke</div>
            <div className="payment-methods">
                <div className="payment-icon" id="payment-method-1"></div>
                <div className="payment-icon" id="payment-method-2"></div>
            </div>
            
        </div>
        </div> 
    )
}

export default MainPage;
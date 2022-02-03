import React from "react";
import { useState } from "react";
import '../style/Summary.css';
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import Paypal from './paypal/PayPal';

let stripePromise;
const getStripe = () => {
    if (!stripePromise){
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    }
    return stripePromise;
}

const ProjectSummary = (props) => {

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    //product for paypal
    const product = {
        description: "Illustration collection ready to be minted as NFT's",
        price: 49.99
    }

    //product for stripe
    const item = {
        price: "price_1KIvUSJJSIx1GH1oS6HAx02I",
        quantity: 1
    };

    if(props.flow.projct === "Basic"){
        item.price = "price_1KIvXtJJSIx1GH1oY1ZitX0Y";
        item.quantity = 1;
    }else if(props.flow.project === "Pro"){
        item.price = "price_1KIvVaJJSIx1GH1o9YIQV0zO";
        item.quantity = 1;
    }else if(props.flow.project === "Max"){
        item.price = "price_1KIvX8JJSIx1GH1o6CHWC2FO";
        item.quantity = 1;
    }
    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/project/summary`,
        customerEmail: `${props.flow.email}`
    }
    

    const redirectToCheckout = async () => {
        setLoading(true);

        //redirecting to stripe
        const stripe = await getStripe();
        const {error} = await stripe.redirectToCheckout(checkoutOptions);
        if(error) setStripeError(error.message);
        setLoading(false);
    }

    if(stripeError) alert(stripeError);

    return(
            <div className="summary-background">
                <div className="summary-container">
                    <h2 className="summary-header">Let's do it!</h2>
                    <div className="card-illustration"></div>
                    <h2 className="order-greeting">Hey <span className="colorful-text" id="customer-email">{props.flow.email}</span>!</h2>
                    <h2 className="order-text">Let's start designing your <span className="colorful-text">{props.flow.project}</span> project in <span className="colorful-text">{props.flow.style}</span> style!</h2>
                    <p className="summary-note">Please make sure your email adress is correct. Thanks to it we will be able to identify and contact you during the design proceess.</p>
                    <div className="paypal-button-container"><Paypal product={product} /></div>
                    <p style={{textAlign: "center"}}>or</p>
                    <button className="buybtn" onClick={redirectToCheckout} disabled={isLoading}>{isLoading ? "Loading" : "Stripe"}</button>
                    <p className="note" id="policy-note">By buying our service you accept <a href="https://www.notion.so/Privacy-policy-aed78a3556664f7f8b6b09f07ef71440">privacy policy</a>.</p>
                </div>
            </div>
        )
    }

const mapStateToProps = (state) =>{
    return {flow: state.flow}
}
export default connect(mapStateToProps)(ProjectSummary);


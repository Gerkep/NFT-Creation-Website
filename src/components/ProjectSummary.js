import React from "react";
import { useState } from "react";
import '../style/Summary.css';
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import Paypal from './paypal/PayPal';

let stripePromise;

const getStripe = () => {
    if (!stripePromise){
        stripePromise = loadStripe("pk_test_51KEZZKJJSIx1GH1o3mp1E23esbLPDfHMGNXYh7U7gJOFTeS0M7g8FzRiir2sAAkxUQdjUwMzPOsSsVVoH8xDfWB200Xwz4kmPv");
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
        price: "price_1KEgS0JJSIx1GH1o7JEHhU3G",
        quantity: 1
    };

    if(props.flow.projct === "Basic"){
        item.price = "price_1KEgS0JJSIx1GH1o7JEHhU3G";
        item.quantity = 1;
    }else if(props.flow.project === "Pro"){
        item.price = "price_1KEgTYJJSIx1GH1og1qOq4VT";
        item.quantity = 1;
    }else if(props.flow.project === "Max"){
        item.price = "price_1KEgVIJJSIx1GH1oqGvGMP9Y";
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
            <div>
                <div className="summary-container">
                    <h2 className="summary-header">Let's do it!</h2>
                    <div className="card-illustration"></div>
                    <h2 className="order-greeting">Hey <span className="colorful-text" id="customer-email">{props.flow.email}</span>!</h2>
                    <h2 className="order-text">Let's start designing your <span className="colorful-text">{props.flow.project}</span> project in <span className="colorful-text">{props.flow.style}</span> style!</h2>
                    <p className="summary-note">Please ensure, that your email adress is correct. That's how we will be able to identify and contact you during the design proceess.</p>
                    <div className="paypal-button-container"><Paypal product={product} /></div>
                    <p>or</p>
                    <button className="buybtn" onClick={redirectToCheckout} disabled={isLoading}>{isLoading ? "Loading" : "Stripe"}</button>
                    <p className="note">By buying our service you accept <a href="#">privacy policy</a>.</p>
                </div>
            </div>
        )
    }

const mapStateToProps = (state) =>{
    return {flow: state.flow}
}
export default connect(mapStateToProps)(ProjectSummary);


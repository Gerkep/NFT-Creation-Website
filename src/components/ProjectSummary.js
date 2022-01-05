import React from "react";
import { useState } from "react";
import '../style/Summary.css';
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

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

    const item = {
        price: "price_1KEbawJJSIx1GH1oi4sOzdTg",
        quantity: 1
    };

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/`,
        cancelUrl: `${window.location.origin}/project/summary`
    }

    const redirectToCheckout = async () => {
        setLoading(true);
        console.log("redirectToCheckout");

        const stripe = await getStripe();
        const {error} = await stripe.redirectToCheckout(checkoutOptions);
        console.log(error);

        if(error) setStripeError(error.message);
        setLoading(false);
    }

    if(stripeError) alert(stripeError);

    return(
            <div>
                <h2 className="flow-header">Summary</h2>
                <div className="summary-container">
                    <h3 className="aspect">Plan: {props.flow.project}</h3>
                    <h3 className="aspect">Style: {props.flow.style}</h3>
                    <h3 className="aspect">Email: {props.flow.email}</h3>
                    <h3 className="aspect">Description: </h3>
                    <p className="desc">{props.flow.description}</p>
                </div>
                <p className="summary-note">Quick note to a buyer. something after you purchase or send us your order without paying to discuss something blah blah blah.</p>
                <button className="buy-btn" onClick={redirectToCheckout} disabled={isLoading}>{isLoading ? "Loading" : "Buy"}</button>
            </div>
        )
    }

const mapStateToProps = (state) =>{
    return {flow: state.flow}
}
export default connect(mapStateToProps)(ProjectSummary);


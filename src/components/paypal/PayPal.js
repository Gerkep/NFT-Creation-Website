import { PayPalButtons } from "@paypal/react-paypal-js";
import history from "../../history";

const PayPal = props => {

    const {product} = props;

    return <PayPalButtons 
    style={{
        color: "white",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
    }}
    onClick={(data, actions) => {
        return actions.resolve()
    }}
    createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: product.description,
                    amount: {
                        value: product.price
                    }
                }
            ]
        })
    }}
    onApprove={ async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        history.push('/success');
    }}
    onError = {(err) => {
        alert("An error occured. Please contact us if you need help with resolving the problem.")
        console.error(err)
    }}
    />;
}

export default PayPal;
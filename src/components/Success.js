import React from "react";
import { connect } from "react-redux";
import { send } from "@emailjs/browser";
import '../style/Success.css'
class Success extends React.Component{

    componentDidUpdate(){
        this.sendEmail();
    }
    componentDidMount(){
        this.sendEmail();
       
    }


    sendEmail = async () => {
        if(this.props.flow.email){
            const flow = this.props.flow;

            let price = 0;
            if(flow.project==="Basic"){
                price = "$49.99"
            }else if(flow.project === "Pro"){
                price = "$1499.00"
            }else if(flow.project === "Max"){
                price = "$3799.00"
            }
            let templateParams = {
                project: `${flow.project}`,
                email: `${flow.email}`,
                style: `${flow.style}`,
                image: `${flow.image}`,
                description: `${flow.description}`,
                price: `${price}`,
                order: `yes`
            };
                        
            send('service_h4nrxmt', 'template_zv9b0qm', templateParams, 'user_AZ09C0zkBDOiPWXVQT35h')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    send('service_h4nrxmt', 'template_ckgdmxk', templateParams, 'user_AZ09C0zkBDOiPWXVQT35h')
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                        console.log('FAILED...', error);
                    });  
                }, function(error) {
                    console.log('FAILED...', error);
                });  
        }
    }

    render(){
        return(
            <div>
                <h1 className="header success-header">Success!</h1>
                <div className="tick-illustration"></div>
                <h2 className="success-message"><span className="colorful-text">Thank you</span> for choosing us as your digital artists!</h2>
               
                <p className="success-info">We will contact you ASAP!</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {flow: state.flow};
}

export default connect(mapStateToProps)(Success);
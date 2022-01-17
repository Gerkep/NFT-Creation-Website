import React from 'react';
import ReactDOM from 'react-dom';
import { Field, formValues, reduxForm } from "redux-form";
import { send } from "@emailjs/browser";
import history from '../history';

import "../style/Modal.css";

class Modal extends React.Component {
    
    renderTextfield({input, label}){
        return(
            <div className="description-container">
                <h2 className="label modal-label">{label}</h2>
                <textarea className="description" id="modal-description" {...input} placeholder="Message"/>
            </div>
        )
    }
    renderError = ({error, touched}) => {
        if(error && touched){
            return(
                <div>
                    <div className="error-form" id="modal-er">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `input ${meta.error && meta.touched ? 'field-error': ''}`
        return(
            <div>
                <h2 className="label modal-label">{label}</h2>
                <input className={className} id="modal-email" {...input} autoComplete="off" placeholder="Email"/>
                {this.renderError(meta)}
            </div>
        );
    }

    sendEmail({email, message}) {
            let templateParams = {
                email: `${email}`,
                message: `${message}`,
            };
                        
            send('service_h4nrxmt', 'template_zv9b0qm', templateParams, `${process.env.EMAILJS_USER_ID}`)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    history.push("/main/contact/success");
                }, function(error) {
                    console.log('FAILED...', error);
                    alert("Something went wrong ;(. Contact us: nfties@gmail.com.")
                });  
    }

    onSubmit = (formValues) => {
        this.sendEmail(formValues);
    }

    render(){
        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal-container">
                <div className="modal-close"onClick={() => history.push("/")}></div>
                    <h2 className="modal-header">Message</h2>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form" id="modal-form">
                        <div>
                            <Field name="email" className="email-input" component={this.renderInput} label="Enter Email:"/>
                            <Field className="description-input"  name="message" component={this.renderTextfield} label="Message:"/>
                        </div>
                        <button className="btn modal-btn">Send</button>
                    </form>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }

};

const validate = formValues => {
    const errors = {};
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!(formValues.email) || !(formValues.email.match(mailFormat))){
        errors.email = 'Enter valid email';
    }
    return errors;
};

export default reduxForm({
    form: 'message',
    validate
})(Modal);
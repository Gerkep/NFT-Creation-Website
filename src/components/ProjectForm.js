import React from "react";
import { Field, reduxForm } from "redux-form";

import "../style/FlowDescription.css"

class ProjectDescription extends React.Component {

    renderTextfield({input, label}){
        return(
            <div className="description-container">
                <h2 className="label">{label}</h2>
                <textarea className="description" {...input} placeholder="Description"/>
            </div>
        )
    }
    renderError = ({error, touched}) => {
        if(error && touched){
            return(
                <div>
                    <div className="error-form">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `input ${meta.error && meta.touched ? 'field-error': ''}`
        return(
            <div>
                <h2 className="label">{label}</h2>
                <input className={className} {...input} autoComplete="off" placeholder="Email"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = async (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        return(
            <div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
                        <div>
                            <Field name="email" className="email-input" component={this.renderInput} label="Enter Email:"/>
                            <Field className="description-input" name="description" component={this.renderTextfield} label="Describe Idea:"/>
                        </div>
                        <div>
                           <div className="description-note">
                               <p className="description-info">Note: Try to write as comprehensive description as possible. It will make the design process easier and faster.<br/><br/><br/> If you want you can send us image similar to your desired outcome. <br/>Email: nftiece@gmail.com. </p>
                               <p className="note" id="emailus-info">(Please email us using the same adress you enter into the form!)</p>
                                <button className="btn continue" id="continue-btn">Continue</button>
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}
const validate = formValues => {
    const errors = {};
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(!(formValues.email) || !(formValues.email.match(mailFormat))){
        errors.email = 'Enter valid email';
    }
    return errors;
};

export default reduxForm({
    form: 'description',
    validate
})(ProjectDescription);
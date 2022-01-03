import React from "react";
import Flow from './Flow';
import UploadForm from './dropzone/UploadForm';
import { Field, reduxForm } from "redux-form";


import "../style/Description.css"
class ProjectDescription extends React.Component {

    renderTextfield({input, label}){
        return(
            <div className="description-container">
                <h2 className="label">{label}</h2>
                <textarea className="description" {...input}/>
            </div>
        )
    }
    renderInput({input, label}){
        return(
            <div>
                <h2 className="label">{label}</h2>
                <input className="input" {...input} />
            </div>
        )
    }
    render(){
        return(
            <div>
                <Flow header="Complete your order">
                    <form className="form">
                        <Field name="email" component={this.renderInput} label="Enter Email"/>
                        <Field name="description" component={this.renderTextfield} label="Describe idea here:"/>
                    </form>
                    <UploadForm className="image-form"/>
                </Flow>
            </div>
        )
    }
}

export default reduxForm({
    form: 'description'
})(ProjectDescription);
import React from "react";
import DropZoneField from "./dropzone/DropzoneField";
import { Field, reduxForm } from "redux-form";

import "../style/FlowDescription.css"

const imageIsRequired = value => (!value ? "Required" : undefined);
class ProjectDescription extends React.Component {

    state = { imageFile: [] };
    
  handleOnDrop = (newImageFile, onChange) => {
    const imageFile = {
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size,
    };

    this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
  };

  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());

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

    onSubmit = (formValues) => {
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
                            <Field
                                className="dropzone"
                                name="imageToUpload"
                                component={DropZoneField}
                                type="file"
                                imagefile={this.state.imageFile}
                                handleOnDrop={this.handleOnDrop}
                                validate={[imageIsRequired]}
                            />
                            <button
                                type="button"
                                className="uk-button uk-button-default uk-button-large clear"
                                disabled={this.props.pristine || this.props.submitting}
                                onClick={this.resetForm}
                            >
                            Clear
                            </button>
                            <button className="btn continue" id="continue-btn">Continue</button>
                        </div>
                    </form>
            </div>
        )
    }
}
const validate = formValues => {
    const errors = {};
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!(formValues.email) || !(formValues.email.match(mailFormat))){
        errors.email = 'Enter valid email';
    }
    return errors;
};

export default reduxForm({
    form: 'description',
    validate
})(ProjectDescription);
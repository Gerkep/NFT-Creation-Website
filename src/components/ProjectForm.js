import React from "react";
import DropZoneField from "./dropzone/DropzoneField";
import { Field, reduxForm } from "redux-form";


import "../style/Description.css"

const imageIsRequired = value => (!value ? "Required" : undefined);
class ProjectDescription extends React.Component {

    state = { imageFile: [] };
    
  handleOnDrop = (newImageFile, onChange) => {
    const imageFile = {
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size
    };

    this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
  };

  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());

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
                <input className="input" {...input} autoComplete="off"/>
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        console.log(formValues);
    }

    render(){
        return(
            <div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
                        <Field name="email" component={this.renderInput} label="Enter Email:"/>
                        <Field name="description" component={this.renderTextfield} label="Describe Idea:"/>
                        <Field
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
                        <button className="btn" id="continue-btn">Continue</button>
                    </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'description'
})(ProjectDescription);
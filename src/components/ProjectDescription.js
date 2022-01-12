import React from "react";
import Flow from './Flow';


import "../style/FlowDescription.css"
import { connect } from "react-redux";
import { submitOrder } from "../actions";
import ProjectForm from "./ProjectForm";

class ProjectDescription extends React.Component {


    onSubmit = (formValues) => {
        this.props.submitOrder(formValues);
    }

    render(){
        return(
            <div>
                <Flow header="Complete your order">
                    <ProjectForm onSubmit={this.onSubmit}></ProjectForm>
                </Flow>
            </div>
        )
    }
}

export default connect(null, {submitOrder})(ProjectDescription)
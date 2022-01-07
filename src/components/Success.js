import React from "react";
import { connect } from "react-redux";
import { send } from "@emailjs/browser";
class Success extends React.Component{

    componentDidUpdate(){
        this.sendEmail();
    }
    componentDidMount(){
        this.sendEmail();
    }


    sendEmail() {
        if(this.props.flow.project && this.state.count===0){
            const flow = this.props.flow;
            let templateParams = {
                project: `${flow.project}`,
                email: `${flow.email}`,
                style: `${flow.style}`,
                image: `${flow.image}`,
                description: `${flow.description}`
            };
                        
            send('service_h4nrxmt', 'template_zv9b0qm', templateParams, 'user_AZ09C0zkBDOiPWXVQT35h')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });  
        }else {
        console.log(" ");
        }  
    }

    render(){
        return(
            <div>
                <h1 className="header">Success</h1>
                <h2>{this.props.flow.project}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {flow: state.flow};
}

export default connect(mapStateToProps)(Success);
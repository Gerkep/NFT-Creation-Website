import React from "react";
import { connect } from "react-redux";
import { send } from "@emailjs/browser";
import '../style/Success.css'
class Success extends React.Component{

    // componentDidUpdate(){
    //     this.sendEmail();
    // }
    // componentDidMount(){👀
    //     this.sendEmail();
    // }


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
                <h1 className="header success-header">Success!</h1>
                <h2 className="success-message"><span className="colorful-text">Thank you</span> for choosing us as your digital artists!</h2>
                <div className="tick-illustration"></div>
                <p className="success-info">We will contact you ASAP on this <br/>email: {this.props.flow.email} </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {flow: state.flow};
}

export default connect(mapStateToProps)(Success);
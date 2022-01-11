import React from 'react';
import history from '../history';

import "../style/Modal.css";

class MessageSent extends React.Component {


    render(){
        return(
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-close" onClick={() => history.push("/")}></div>
                    <h2 className="modal-header" id="message-header">Message Sent Succesfully!</h2>
                    <div className="tick-illustration" id="message-tick"></div>
                    <button className="btn modal-btn"  onClick={() => history.push("/")}>Homepage</button>
                </div>
            </div>
        );
    }

};

export default MessageSent;
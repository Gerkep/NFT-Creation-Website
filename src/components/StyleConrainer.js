import React from "react";
import { connect } from "react-redux";
import { selectStyle } from "../actions";
import "../style/FlowStyle.css";


const StyleContainer = ({image, header, selectStyle, flow}) => {
    return(
        <button onClick={() => selectStyle(header)} id="btn" className="style-container">
            <img className="image" src={image}></img>
            <h2 className="header">{header}</h2>
        </button>
    )
}
const mapStateToProps = state => {
    return {flow: state.flow}
}
export default connect(mapStateToProps, {selectStyle})(StyleContainer);
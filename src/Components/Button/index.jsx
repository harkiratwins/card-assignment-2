import React from "react";
import PropTypes from 'prop-types';
import 'D:/Harkirat kaur/Assignment-2/card-assignment-2/node_modules/bootstrap/dist/css/bootstrap.min.css';


const Buttons =({text,onClick,disabled,...rest})=>{
    return(
    <button onClick={onClick} disabled={disabled}{...rest}>
        {text}
    </button>
    );
};

Buttons.propTypes={
    text:PropTypes.string.isRequired,
    onclick:PropTypes.func.isRequired,
    disabled:PropTypes.bool,
};

export default Buttons;
import React from "react";
import './Button.css'

export default props => (
    <button onClick={() => props.click(props.fill)} className={`button ${props.operation ? 'operation' : ''} ${props.className}`}
    >
        {props.fill}
        
    </button>
)

import React from "react";
import { Link } from "react-router-dom";

export default props => 
    <Link to={props.url}>
        <i className={`fa fa-${props.icon}`}/> {props.label}
    </Link>
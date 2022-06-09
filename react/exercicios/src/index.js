import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import Saudacao from "./componentes/Saudacao";

// Nomes de componentes precisam começar com letra maiúscula!!!!!!!!!!!

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <Fragment>
        <Saudacao tipo="Boa tarde" nome="Igão"></Saudacao>
    </Fragment>
,   document.getElementById('root'))
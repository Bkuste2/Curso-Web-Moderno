import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import Multiplos, {BoaNoite} from "./componentes/Multiplos";

// Nomes de componentes precisam começar com letra maiúscula!!!!!!!!!!!

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <Fragment>
        <Multiplos.BoaTarde nome="Igor"/>
        <BoaNoite nome="Igor"/>
    </Fragment>
,   document.getElementById('root'))
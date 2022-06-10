import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";
import Saudacao from "./componentes/Saudacao";

// Nomes de componentes precisam começar com letra maiúscula!!!!!!!!!!!

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <Fragment>
        <Pai nome="Cleiton" sobrenome="Silva">
            {/* Como colocar os filhos aqui? */}
            <Filho nome="Paulo"/>
            <Filho nome="João"/>
            <Filho nome="Cleison"/>
        </Pai>
    </Fragment>
,   document.getElementById('root'))
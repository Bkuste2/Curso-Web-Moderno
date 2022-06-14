import React from "react";
import NavItem from "./NavItem";
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem url="/" icon="home" label="Inicio"/>
            <NavItem url="/users" icon="users" label="Usuários"/>    
        </nav>
    </aside>

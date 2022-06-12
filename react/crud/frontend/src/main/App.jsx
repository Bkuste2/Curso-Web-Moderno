import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from "react";
import Main from '../components/template/Main';
import Header from '../components/template/Header';
import Logo from '../components/template/Logo';
import Footer from '../components/template/Footer';
import Nav from '../components/template/Nav';

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de react"/>
        <Footer/>
    </div>
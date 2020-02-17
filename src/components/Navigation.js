import React from 'react';
import { Link } from "react-router-dom";
import LogoCircle from "../assets/img/avatars/logo-circ-bg-w.png";
import LogoText from "../assets/img/logos/logo-lemurs-text-w-min.png";

const Navigation = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark shadow portfolio-navbar gradient">
            <div className="container">
                <a className="navbar-brand logo" href="/">
                    <img src={ LogoCircle } />
                    <img src={ LogoText } alt="Lemurs Webdevelopment" />
                </a>
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation"><Link className="nav-link active" to="/">Home</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/repos">Repos</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
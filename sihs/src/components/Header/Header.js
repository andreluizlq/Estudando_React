import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <section className="header">
            <h1 className="logo">TítuloBemLegal</h1>
            <nav id="nav">
                <ul className="menu">
                    <Link className="menu-link" to="/"> Home </Link>
                    <Link className="menu-link" to="/favoritos"> Favoritos </Link>
                    <Link className="menu-link" to="/exercícios"> Exercícios </Link>
                    <Link className="menu-link" to="/Receitas"> Receitas </Link>
                    <Link className="menu-link" to="/"> Dicas </Link>
                </ul>
            </nav>
        </section>
    );
}
export default Header;
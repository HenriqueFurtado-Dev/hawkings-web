import React from 'react';
import logo from '../../assets/images/sf-logo.png';
import './Header.css'

function Header() {
    return (
        <header className='container'>
            <img className='logo' src={logo} alt="" />
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Depoimentos</a></li>
                <li><a href="#">Depoimentos</a></li>
            </ul>
        </header>
    )
}

export default Header;
import React from 'react';
import './footer.css'
import logo from '../../assets/images/sf-logo.png';

function Footer() {
    return( 
        <footer>
            <div className="footer-navigation container">
                <div className="navigaton-social">
                    <img src={logo} className='logo' alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consequuntur quod aspernatur, tempora ullam nobis necessitatibus, distinctio, minima nemo non eos. Accusantium eius, odit cum necessitatibus ad error minima incidunt!</p>
                </div>
                <div className="navigation-site">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Design</a></li>
                        <li><a href="#">Social design</a></li>
                    </ul>
                </div>
                <div className="navigation-suport">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Design</a></li>
                        <li><a href="#">Social design</a></li>
                    </ul>
                </div>
                <div className="navigation-contact">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Design</a></li>
                        <li><a href="#">Social design</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-credits">
                <p>Desenvolvido por Hawings</p>
            </div>
        </footer>
    )
}

export default Footer;
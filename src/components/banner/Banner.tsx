import React from 'react';
import Connections from '../../assets/images/connections.png'
import './Banner.css'

function Banner() {
    return (
        <section className='banner container'>

            <div className="banner-content">
                <h2>Um novo portal, 100% focado em acessibilidade</h2>
                <p>Em parceria com o projeto hawkings o novo portal Salesforce possui diversas ferramentas de acessibilidade para garantir a boa experiência de todos nossos usuários.</p>
            </div>

            <div className="banner-image">
                <img src={Connections} alt="" />
            </div>

        </section>
    )
};

export default Banner;
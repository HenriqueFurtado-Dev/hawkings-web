import React from 'react';
import './about.css'
import video from '../../assets/images/video.png';

function About() {
    return (
        <section className='about container'>
            <div className="about-image">
                <img src={video} alt="" />
            </div>
            <div className="about-content">
                <h3>Um pouco sobre nós</h3>
                <p>Desde que começamos a operar em um pequeno apartamento em São Francisco em 1999, acreditamos que fazer o bem como empresa significa fazer o bem ao mundo. Por isso, comprometemos nosso tempo, equidade e produtos para melhorar a educação, a igualdade e o meio ambiente para todos. Os principais valores da Salesforce: Confiança, Sucesso do Cliente, Inovação, Igualdade e Sustentabilidade.</p>
            </div>
        </section>
    )
}

export default About;
import React from 'react';
import './crm.css'
import crm from '../../assets/images/crm.png'

function Crm() {
    return(
        <section className='CRM container'>
            <div className="crm-content">
                <h3>O que é CRM?</h3>    
                <p>Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa.</p>
                <button><a href="#">Saiba mais</a></button>
            </div>
            <div className="crm-image">
                <img src={crm} alt="" />
            </div>
        </section>
    )
}

export default Crm;
import React from 'react';
import './logos.css'
import tigreLogo from '../../assets/images/logos/tigre.png';
import gymLogo from '../../assets/images/logos/gympass.png';
import sumLogo from '../../assets/images/logos/sumup.png';
import vipalLogo from '../../assets/images/logos/vipal.png';

function Logos() {
    return(
        <div className='logos-partners container'>
            <div className="logos-partners-content">
                <h2>Nossos clientes</h2>
                <p>Empresas que confiam em nosso trabalho</p>
            </div>
            <div className="logos-partners-images">
                <img src={tigreLogo} alt="" />
                <img src={gymLogo} alt="" />
                <img src={sumLogo} alt="" />
                <img src={vipalLogo} alt="" />
            </div>
        </div>
    )
}

export default Logos;
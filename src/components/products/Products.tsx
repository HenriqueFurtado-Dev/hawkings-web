import React from 'react';
import './products.css'
import vendas from '../../assets/images/vendas.png'
import atendimento from '../../assets/images/atendimento.png'
import customer from '../../assets/images/customer360.png'

function Products() {
    return(
        <section className='products container'>
            <h2>Conheça nossos produtos</h2>
            <p>Several selected clients, who already believe in our service.</p>

            <div className="products-box">

                <div className="box-product">
                    <img src={vendas} alt="" />
                    <h3>Vendas</h3>
                    <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
                    <button><a href="#">Assistir a demo</a></button>
                </div>

                <div className="box-product">
                    <img src={atendimento} alt="" />
                    <h3>Atendimento</h3>
                    <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
                    <button><a href="#">Assistir a demo</a></button>
                </div>

                <div className="box-product">
                    <img src={customer} alt="" />
                    <h3>Customer</h3>
                    <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
                    <button><a href="#">Assistir a demo</a></button>
                </div>

            </div>

        </section>
    )
}

export default Products;
import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Watson from './components/watson/Watson'
import Logos from './components/logos/Logos'
import Products from './components/products/Products'
import About from './components/about/About'
import CRM from './components/crm/Crm'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
  return (
    <main>
      <Header></Header>
      <Banner></Banner>
      <Logos></Logos>
      <Products></Products>
      <About></About>
      <CRM></CRM>
      <Footer></Footer>

      <Watson></Watson>
    </main>
  )
}

export default App

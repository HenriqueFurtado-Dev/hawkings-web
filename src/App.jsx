import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Watson from './components/watson/Watson'
import Logos from './components/logos/Logos'
import Products from './components/products/Products'
// FINALIZAR: import Menu from './components/Menu'

import './App.css'

function App() {
  return (
    <main>
      <Header></Header>
      <Banner></Banner>
      <Watson></Watson>
      <Logos></Logos>
      <Products></Products>
    </main>
  )
}

export default App

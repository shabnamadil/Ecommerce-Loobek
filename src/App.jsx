import React from 'react'
import Header from './components/header/Header'
import './assets/css/index.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
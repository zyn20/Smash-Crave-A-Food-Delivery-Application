import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Cards from './components/Cards'
import Login from './components/Login'
import Signup from './components/Signup';
import { CartProvider } from './components/ContextReducer'
const App = () => {
  return (
    <>
    <CartProvider>
    <Router>
      <Header/>
<Routes>

  <Route path='/' element={<Home/>} / >
  <Route path='/videos' element={<Cards/>} / >
  <Route path='/login' element={<Login/>} / >
  <Route path='/signup' element={<Signup/>} / >
    
  
</Routes>
<Footer/>
    </Router>
    
    </CartProvider>
    
    </>
  )
}

export default App
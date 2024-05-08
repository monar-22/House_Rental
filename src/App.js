import React from 'react';
import { Routes,Route } from 'react-router-dom';
import  Header from './components/Header';
import  HomePage from './pages/HomePage';
import  HouseDetails from './pages/HouseDetails';
import Login from './components/Login';
import Register from './components/Register';
import  Footer from './components/Footer';


const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path ='/property/:id' element={<HouseDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

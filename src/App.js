import React from 'react';
import { Routes,Route } from 'react-router-dom';
import  Header from './components/Header';
import  HomePage from './pages/HomePage';
import  HouseDetails from './pages/HouseDetails';
import  Footer from './components/Footer';
// import  Footer from './components/Footer';
// import  Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path ='/house/:id' element={<HouseDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

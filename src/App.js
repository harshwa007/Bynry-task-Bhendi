import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Bhendi from './pages/Bhendi';
import Error404 from './pages/Error404';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import './App.css'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Route path='/' element={<Home />}></Route>
        <Route Route path='/aboutus' element={<AboutUs />}></Route>
        <Route Route path='/Bhendi' element={<Bhendi />}></Route>
        <Route Route path='*' element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}


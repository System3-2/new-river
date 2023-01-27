import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';
import Media from '../components/Media';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/media' element={<Media />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Pages;
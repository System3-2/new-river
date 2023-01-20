import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={'Home'} />
      <Route path='/about' element={'about'} />
      <Route path='/media' element={'media'} />
      <Route path='/contact' element={'contact'} />
    </Routes>
  )
}

export default Pages;
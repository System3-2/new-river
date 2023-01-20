import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const Navbar = () => {

  const [show, setShow] = useState(false);

  function toggleSidebar() {
    setShow(!show);
    // console.log(show);
  }
  return (
    <header>
      <nav className='navbar'>

        <div className="nav-brand">
          <img className='logo' src="https://cdn.artcld.com/img/3qlp8sma8zq6t4smsigu.jpg" alt="logo" />
        </div>

        <ul className="links">
          <Link to="/"><li className="items">Home</li></Link>
          <Link to="/about"><li className="items">About</li></Link>
          <Link to="/media"><li className="items">Media</li></Link>
          <Link to="/contact"><li className="items">Contact</li></Link>
        </ul>

        <div className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>

        <ul className={show ? 'sidebar sidebar-show' : 'sidebar'}>
          <Link to="/" onClick={toggleSidebar}><li className="items">Home</li></Link>
          <Link to="/about" onClick={toggleSidebar}><li className="items">About</li></Link>
          <Link to="/media" onClick={toggleSidebar}><li className="items">Media</li></Link>
          <Link to="/contact" onClick={toggleSidebar}><li className="items">Contact</li></Link>

          <div className="cancel" onClick={toggleSidebar}>
            <MdCancel className='cancel' />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className='navBar'>
        <Link to={`/`} className='home'>Home</Link>

        <Link to={`/profile`} className='home'>Profile</Link>
      </div>
    </header>
  );
}

export default Header;
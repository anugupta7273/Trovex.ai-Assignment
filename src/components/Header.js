import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Trovex.ai</div>
      <nav>
        <ul>
          <li>Products</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>Resources</li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="btn demo">Book a Demo</button>
        <button className="btn login">Login</button>
      </div>
    </header>
  );
}

export default Header;

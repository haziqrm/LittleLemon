import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    setMenuOpen(false);
    navigate(`/#${id}`); // navigate to home with hash
  };

  return (
    <nav className="nav">
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a onClick={() => handleNavClick('hero')}>Home</a></li>
        <li><a onClick={() => handleNavClick('menu')}>Menu</a></li>
        <li><a onClick={() => handleNavClick('testimonials')}>Testimonials</a></li>
        <li><a onClick={() => handleNavClick('about')}>About Us</a></li>
        <li>
          <button className="order-online-btn" onClick={() => alert('Redirecting to order page...')}>
            Order Online
          </button>
        </li>
        <li><img src="./assets/basket.svg" alt="basket" width="40px" /></li>
      </ul>
    </nav>
  );
}

export default Nav;

import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="container container-8">
        <img src="/assets/logo.png" alt="Little Lemon Logo" className="logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;

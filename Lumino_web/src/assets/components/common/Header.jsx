import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => { // No more React.FC
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-secondary">ABC Studios</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/about-us" className="hover:text-primary">About Us</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/portfolio" className="hover:text-primary">Portfolio</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <Link to="/join-us" className="hover:text-primary">Join Us</Link>
          <Link to="/esports" className="hover:text-primary">Esports</Link>
        </nav>
        {/* Mobile Navigation (Hamburger menu - you can add this later) */}
      </div>
    </header>
  );
};

export default Header;
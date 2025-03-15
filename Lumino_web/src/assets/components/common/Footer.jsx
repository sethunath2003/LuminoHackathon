import React from 'react';

const Footer = () => { // No more React.FC
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} ABC Studios. All rights reserved.</p>
        {/* Add social media links here later */}
      </div>
    </footer>
  );
};

export default Footer;
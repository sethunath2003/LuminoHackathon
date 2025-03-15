import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="hero-section py-16 bg-gray-100 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to ABC Studios</h1>
        <p className="text-gray-700 text-lg mb-8">Your Partner in Live Streaming, Media Production, and More.</p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Contact Us
        </button>
      </section>

      {/* Add other homepage sections here (Services Overview, Portfolio Snippets, etc.) */}
      <section className="services-overview py-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Our Services</h2>
        {/* ... Service cards will go here ... */}
        <p>Placeholder for Services Overview Section</p>
      </section>
    </div>
  );
};

export default HomePage;
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white h-96 flex items-center justify-center"
      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} // Inline style for text shadow
    >
      <h1 className="text-5xl font-bold">Elevate Your Business</h1>
    </section>
  );
};

export default HeroSection;

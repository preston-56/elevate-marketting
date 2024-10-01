import React from 'react';
import AboutSection from '../../sections/AboutSection'

const About: React.FC = () => {
    return (
      <div className="about py-20">
        <h1 className="text-4xl text-center">Our Story</h1>
        <p className="mt-4 text-center">We are dedicated to empowering brands through strategic marketing...</p>
        {/* Add team member profiles and impact statistics */}
        <AboutSection />

      </div>
    );
  };
  
  export default About;
  
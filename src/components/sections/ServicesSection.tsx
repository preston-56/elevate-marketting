import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Strategic Marketing</h3>
            <p>We develop tailored marketing strategies to meet your goals.</p>
            <Link to="/book-now">
              {/* Adding a custom button outside the Calendly widget */}
              <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
                Book Now
              </button>
            </Link>
          </div>
          <div className="p-4 border rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Creative Campaigning</h3>
            <p>Engaging campaigns that resonate with your audience.</p>
            <Link to="/book-now">
              <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
                Book Now
              </button>
            </Link>
          </div>
          <div className="p-4 border rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Consulting Services</h3>
            <p>Expert advice to help your business thrive.</p>
            <Link to="/book-now">
              <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

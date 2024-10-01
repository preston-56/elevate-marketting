import HeroSection from '../../sections/HeroSection';
import AboutSection from '../../sections/AboutSection'
import ServicesSection from '../../sections/ServicesSection';
import TestimonialsSection from '../../sections/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;

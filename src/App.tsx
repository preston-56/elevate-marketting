import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/client/Home";
import About from "./components/pages/client/About";
import Services from "./components/pages/client/Services";
import Contact from "./components/pages/client/Contact";
import BookNow from "./components/pages/client/BookNow";
import NotFound from "./components/pages/client/NotFound";
import Podcasts from "./components/pages/package/Podcasts";
import Artists from "./components/pages/package/Artists";
import Nonprofits from "./components/pages/package/Nonprofits";
import Financial from "./components/pages/package/Financial";
import CoreBusiness from "./components/pages/package/CoreBusiness";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/packages/podcasts" element={<Podcasts />} />
            <Route path="/packages/artists" element={<Artists />} />
            <Route path="/packages/nonprofits" element={<Nonprofits />} />
            <Route path="/packages/financial" element={<Financial />} />
            <Route path="/packages/core-business" element={<CoreBusiness />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

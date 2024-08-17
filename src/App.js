
import './App.css';

import Features from './Components/Features';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import Experiences from './Components/Experiences';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import TopFooter from './Components/TopFooter';
import BottomFooter from './Components/BottomFooter';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experiences />
      <Features />
      <Testimonials />
      <AboutUs />
      <ContactUs />
      <TopFooter />
      <BottomFooter />
    </>
  );
}

export default App;

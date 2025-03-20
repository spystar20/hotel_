import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Menu from './pages/Menu';
import Home from './pages/Home'; 
import Venue from './pages/Venu'; 
import Contact from './pages/Contact';
import About from './pages/About';
import Booking from './pages/Booking';
import BookRoom from './pages/BookRoom';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Payment from './pages/PayementGateway';
import BookingSummary from './pages/BookingSummary';

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/venue" element={<Venue />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/book-room/:roomId" element={<BookRoom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import About from './components/About';
import Mission from './components/Mission';
import Expertise from './components/Expertise';
import Review from './components/Review';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import InfoSection from './components/InfoSection';

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <Navbar/>
      <Menu/>
      <InfoSection/>
      <Reservation/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <Footer />
    </main>
  )
}

export default App;
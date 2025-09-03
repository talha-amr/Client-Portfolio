import React from 'react';
import Grid from '../components/Grid';
import Hero from '../components/Hero';
import Navbar from '../components/NavBar';
import Scroller from '../components/Scroller';
import Footer from '../components/Footer';
import ScrollerMobile from '../components/ScrollerMobile';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Home() {
  return (
    <>
      <Navbar activePage={"home"} />
      <Hero />
      <Grid />

      {/* Desktop Scroller */}
      <div className="hidden md:block">
        <Scroller />
      </div>

      {/* Mobile Scroller */}
      <div className="md:hidden">
        <ScrollerMobile />
      </div>
      <div className="w-full px-6">
      <Footer />
      </div>
    </>
  );
}

export default Home;

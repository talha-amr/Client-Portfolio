import React from 'react';
import Grid from '../components/Grid';
import Hero from '../components/Hero';
import Navbar from '../components/NavBar';
import Work from '../components/Work';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
function Home() {

  return (
    <>
      <Navbar activePage={"home"}/>
      <Hero/>
      <Grid/>
      <Work/>
    </>
  )
}

export default Home

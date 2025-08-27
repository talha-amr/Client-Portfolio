import './App.css'
import Grid from './components/Grid';
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Work from './components/Work';

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Grid/>
      <Work/>
    </>
  )
}

export default App

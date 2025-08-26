import './App.css'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="bg-black min-h-screen h-screen"></div>
    </>
  )
}

export default App

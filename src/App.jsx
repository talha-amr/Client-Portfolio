import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTriggerRefresh from "./components/ScrollTriggerRefresh";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollTriggerRefresh /> {/* ✅ add this to enable global refresh */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;

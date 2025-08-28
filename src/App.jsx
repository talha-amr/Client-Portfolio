import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Work from './pages/Work';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </Router>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter/400.css";  // Regular
import "@fontsource/inter/500.css";  // Medium
import "@fontsource/inter/700.css";  // Bold
import "@fontsource/inter/900.css";  // Black 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

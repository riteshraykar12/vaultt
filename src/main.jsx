import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (!import.meta.env.VITE_SCRIPT_URL) {
  console.error("CRITICAL: VITE_SCRIPT_URL is not defined in environment variables.");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

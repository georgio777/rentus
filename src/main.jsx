import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Spasibo from './components/Spasibo.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/spasibo' element={<Spasibo />}></Route>
    </Routes>
  </BrowserRouter>
    // </StrictMode>,
)

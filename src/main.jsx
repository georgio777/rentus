import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Исправлено: react-router -> react-router-dom
import Spasibo from './components/Spasibo.jsx';
import Price from './components/Price.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Исправлено: index -> path="/" */}
        <Route path="/spasibo" element={<Spasibo />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
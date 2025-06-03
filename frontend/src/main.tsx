import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './layout/Navbar.tsx';
import Footer from './layout/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <div className='flex min-h-screen w-full flex-col'>
      <div>
        <Navbar />
        </div>
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<App />} />
           
            {/* Add other routes here */}
          </Routes>
          <Footer />
          </div>
      </div>
   
    </BrowserRouter>
  </StrictMode>
)
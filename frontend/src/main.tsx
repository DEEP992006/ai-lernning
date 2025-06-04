import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './layout/Navbar.tsx';
import Footer from './layout/Footer.tsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Signup from './Signup.tsx';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='flex min-h-screen w-full flex-col'>
          <div>
            <Navbar />
          </div>
          <div className='flex-1'>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signup />} />

              {/* Add other routes here */}
            </Routes>
        
          </div>
        </div>

      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
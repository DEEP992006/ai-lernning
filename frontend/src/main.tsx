import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from './layout/Navbar.tsx'
import Footer from './layout/Footer.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Signup from './pages/auth/Signup.tsx'
import Signin from './pages/auth/Signin.tsx'
import { Toaster } from 'sonner' // shadcn/ui toaster
import Profile from './pages/auth/Profile.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Features from './Features/featurespage/components/Features.tsx'
import Featurespage from './pages/Featurespage.tsx'
import Aboutus from './pages/Aboutus.tsx'
import Course from './Features/course/Course.tsx'
import New from './Features/course/New.tsx'

// query client
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
              <Route path="/signin" element={<Signin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/features" element={<Featurespage />} />
              <Route path="/About us/:id" element={<New />} />
              
              {/* Add other routes here */}
            </Routes>
          </div>

        </div>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
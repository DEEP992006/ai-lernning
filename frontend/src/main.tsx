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
import Course from './Features/courses/signlecourse/api/components/Course.tsx'
import Newcourses from './pages/course/newcourse.tsx'
import Allcourses from './pages/course/All_course.tsx'
import Signle_course from './pages/course/Signle_course.tsx'

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
              <Route path="/course" element={<Allcourses />} />
              <Route path="/course/new" element={<Newcourses />} />
              <Route path="/course/:id/:chapterid" element={<Signle_course />} />
              
              {/* Add other routes here */}
            </Routes>
          </div>

        </div>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
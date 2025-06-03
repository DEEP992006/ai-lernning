import React from 'react'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SkillForge
          </h1>
          <p className="text-sm mt-2 text-gray-500">
            Learn faster with AI-powered microlearning. Built to boost your growth at warp speed.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li>Courses</li>
            <li>AI Assistant</li>
            <li>Progress Tracker</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-blue-600" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-blue-500" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-pink-500" /></a>
            <a href="#"><Github className="w-5 h-5 hover:text-gray-800" /></a>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillForge. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

import { ArrowRight, Brain } from "lucide-react"
import { Button } from "../components/ui/button"


const Navbar = () => {
  return (
    
  <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50 shadow-sm h-18">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                SkillForge
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <a key={item} href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            
          </div>

          {/* Mobile Menu */}
        
        </div>
      </nav>
  )
}

export default Navbar
import { ArrowRight, Award, Play, Sparkles, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => (
  <section className="pt-24 pb-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                  <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-700">AI-Powered Learning Platform</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Master Skills at{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Warp Speed
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Transform your learning experience with AI-curated micro-lessons, adaptive quizzes, and real-time progress tracking. 
                  Achieve in weeks what used to take months.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-medium px-8 py-4 text-lg"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium px-8 py-4 text-lg group"
                  >
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="flex items-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">Active Learners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">5x</div>
                    <div className="text-sm text-gray-600">Faster Learning</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Learning Dashboard</h3>
                      <p className="text-blue-100 text-sm">Your progress overview</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Live</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Progress Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between mb-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-green-600">+12%</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">87%</div>
                      <div className="text-sm text-gray-600">Overall Progress</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                      <div className="flex items-center justify-between mb-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium text-green-600">+3</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">24</div>
                      <div className="text-sm text-gray-600">Skills Mastered</div>
                    </div>
                  </div>

                  {/* Current Courses */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Current Courses</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Advanced React', progress: 78, color: 'blue' },
                        { name: 'Machine Learning', progress: 45, color: 'purple' },
                        { name: 'Data Structures', progress: 92, color: 'green' }
                      ].map((course, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-${course.color}-100 rounded-lg flex items-center justify-center`}>
                            <div className={`w-3 h-3 bg-${course.color}-600 rounded`}></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-gray-900 text-sm">{course.name}</span>
                              <span className="text-sm text-gray-600">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`bg-${course.color}-600 h-2 rounded-full transition-all duration-1000`}
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">New Achievement!</div>
                        <div className="text-sm text-gray-600">Completed 5 courses this month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>
);
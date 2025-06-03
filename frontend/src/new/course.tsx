import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Star, Play, ArrowRight } from 'lucide-react';
import Navbar from './navbar';

const CoursesPage = () => {
  const courses = [
    {
      title: "AI Fundamentals",
      description: "Master the core concepts of artificial intelligence and machine learning",
      duration: "8 hours",
      level: "Beginner",
      rating: 4.9,
      lessons: 24
    },
    {
      title: "Data Science Professional",
      description: "Complete training in Python, statistics, and data visualization",
      duration: "30 hours",
      level: "Intermediate",
      rating: 4.8,
      lessons: 85
    },
    {
      title: "Cloud Architecture",
      description: "Design and deploy scalable cloud solutions with AWS and Azure",
      duration: "15 hours",
      level: "Advanced",
      rating: 4.7,
      lessons: 42
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our AI-powered courses designed to accelerate your learning and career growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Play className="w-4 h-4 mr-1" />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
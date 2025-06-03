import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import Navbar from './navbar';

const AboutPage = () => {
  const stats = [
    { value: "50,000+", label: "Active Learners" },
    { value: "300+", label: "Expert Instructors" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "5x", label: "Faster Learning" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillForge</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing the way people learn through AI-powered adaptive technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At SkillForge, we believe that education should be personalized, accessible, and effective for everyone. 
                Our mission is to break down barriers to learning by harnessing the power of artificial intelligence 
                to create adaptive learning experiences that meet each individual's unique needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Founded in 2020 by a team of educators and AI researchers, SkillForge combines cutting-edge technology 
                with proven pedagogical approaches to help learners achieve their goals faster than ever before.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Learner First</h3>
                <p className="text-gray-600">
                  Every decision we make starts with what's best for our learners' success.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We relentlessly pursue breakthroughs in learning technology and pedagogy.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We hold ourselves to the highest standards in everything we create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
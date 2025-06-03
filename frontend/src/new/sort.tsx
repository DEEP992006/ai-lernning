import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Zap, Clock, Target, BarChart3, BookOpen, Check } from 'lucide-react';
import { HeroSection } from './hero';
import Navbar from './navbar';
import FeatureCard from './feature';

const Practice= () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
<Navbar />
      <HeroSection />

      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillForge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of learning with our cutting-edge AI technology designed to accelerate your skill development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Brain}
              title="AI-Powered Adaptation"
              description="Advanced AI analyzes your learning patterns and adapts content difficulty, pacing, and style to match your unique needs."
              color="blue"
            />
            <FeatureCard 
              icon={Clock}
              title="Smart Microlearning"
              description="Break complex topics into digestible 5-15 minute sessions that fit seamlessly into your busy schedule."
              color="purple"
            />
            <FeatureCard 
              icon={Target}
              title="Adaptive Quizzes"
              description="Dynamic assessments that adjust question difficulty based on your performance for optimal challenge."
              color="emerald"
            />
            <FeatureCard 
              icon={BarChart3}
              title="Visual Progress Tracking"
              description="Comprehensive analytics and beautiful visualizations show your learning journey in real-time."
              color="orange"
            />
            <FeatureCard 
              icon={Zap}
              title="Accelerated Learning"
              description="Learn 5x faster with scientifically-proven spaced repetition and AI-optimized content sequencing."
              color="pink"
            />
            <FeatureCard 
              icon={BookOpen}
              title="Personalized Paths"
              description="Custom-tailored curricula that adapt to your goals, knowledge, and learning preferences."
              color="indigo"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of professionals who are accelerating their careers with SkillForge AI.
            Start your free trial today and experience the future of learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center text-blue-100">
              <Check className="w-5 h-5 mr-2" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice;
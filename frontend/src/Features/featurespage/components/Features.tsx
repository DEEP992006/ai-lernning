import React from 'react'
import Featurescard from './FeaturesCard'
import { features } from '../Featuresdata'

const Features = () => {
  return (
    <div className='px-7'>
      {/* Section Heading */}
      <div className='space-y-3 px-5'>
        <p className='text-7xl text-center font-bold'>
          Why Choose{' '}
          <span className='bg-gradient-to-r from-blue-600 to bg-purple-600 bg-clip-text text-transparent'>
            SkillForge
          </span>
        </p>
        <p className='text-center text-gray-600 text-xl'>
          SkillForge uses AI to instantly generate complete, personalized learning paths — including chapters,
          flashcards, and quizzes — tailored to your goals. Learn smarter, faster, and with total focus.
        </p>
      </div>

      {/* Grid layout for feature cards */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-7 pt-9 py-5'>
        {features.map((item) => (
          <Featurescard
            key={item.name}
            name={item.name}
            description={item.description}
            Icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  )
}

export default Features

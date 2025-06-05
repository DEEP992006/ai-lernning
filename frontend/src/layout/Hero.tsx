import { MoveRightIcon, Sparkle } from 'lucide-react'

const Hero = () => {
  return (
    <div className='grid grid-cols-12 h-full min-w-full pt-7 pb-17'>

      {/* Left content - Headline & CTA */}
      <div className="h-full col-span-5 flex flex-col pt-5 px-12">

        {/* Highlight tag */}
        <div className='flex items-center space-x-2 rounded-xl bg-blue-200 w-fit px-3 py-1 text-blue-600'>
          <Sparkle size={15} />
          <p>AI Powered Platform</p>
        </div>

        {/* Main heading */}
        <p className='text-7xl font-bold mt-9 leading-normal'>
          Master skill at
        </p>

        {/* Gradient-styled keyword */}
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Warp Speed
        </h1>

        {/* Hero description */}
        <p className='w-full my-5 text-gray-600 text-lg'>
          Instantly generate personalized courses with AI. Whether you're learning to code, design, or write — SkillForge creates chapter-wise lessons, flashcards, and quizzes tailored just for you.
        </p>

        {/* CTA Button */}
        <div className='my-1'>
          <button className='bg-gradient-to-r from-blue-600 to bg-purple-600 text-white rounded-xl text-lg px-5 py-2 flex items-center gap-2 '>
            Start Learning Free
            <MoveRightIcon />
          </button>
        </div>
      </div>

      {/* Right visual section */}
      <div className="col-span-7 flex items-start pl-10 pr-2 py-7">
        <img src='./image2.svg' width={700} height={700} />
      </div>
    </div>
  )
}

export default Hero

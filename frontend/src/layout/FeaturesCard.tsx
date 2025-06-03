import clsx from 'clsx'
import { Brain } from 'lucide-react'

interface News {
  color: string
  icon: string
  name: string
  description: string
}

// Map base color name to Tailwind background and text classes
const colorMap: Record<string, { bg: string; text: string; shadow:string }> = {
  red: { bg: 'bg-red-100', text: 'text-red-500',shadow:'hover:shadow-red-500' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-600',shadow:'hover:shadow-blue-500' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600',shadow:'hover:shadow-amber-500' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600',shadow:'hover:shadow-purple-500' },
  green: { bg: 'bg-green-100', text: 'text-green-600',shadow:'hover:shadow-green-500' },
}

const Featurescard = ({ color, Icon, name, description, shadow }: News) => {
  const colors = colorMap[color] || { bg: 'bg-gray-100', text: 'text-gray-100' }

  return (

    <div className={clsx("border-2 bg-white w-full py-9 px-6 rounded-2xl flex flex-col gap-y-3  cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 -translate-y-2  group",colors.shadow)}>
      <div className={clsx(colors.bg,"px-4 py-4  w-fit rounded-3xl ")}>
      <Icon className={clsx(colors.text, 'opacity-80')} size={50} />
      </div>
      <h3 className="mt-3 text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

export default Featurescard

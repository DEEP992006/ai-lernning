import { Brain } from 'lucide-react';
import React from 'react';

// Logo section for brand identity
const Heading = () => {
  return (
    <a href="/">
      <div className="flex items-center gap-3">
        {/* Icon with background */}
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <Brain className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>

        {/* Brand name */}
        <span className="font-bold text-2xl text-gray-900 tracking-tight">
          SkillForge
        </span>
      </div>
    </a>
  );
};

export default Heading;

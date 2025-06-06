import React from 'react';
import Coursedata from "./data";
import Course from './Course';
import { useParams, NavLink } from 'react-router';

const New = () => {
  const { id } = useParams();

  // parse id to number and fallback to 0 if invalid
  const chapterIndex = parseInt(id, 10);
  const chapter = Coursedata[chapterIndex] || Coursedata[0];

  return (
    <div className="grid grid-cols-12 min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <div className="col-span-3 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 px-2">Course Content</h2>
        <nav className="space-y-1">
          {Coursedata.map((chapter, index) => (
            <NavLink
              key={index}
              to={`/About%20us/${index}`}
              className={({ isActive }) =>
                `flex items-start px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border-l-4 border-blue-500'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-l-4 border-transparent'
                }`
              }
            >
              <span className="flex items-center justify-center w-5 h-5 bg-white dark:bg-gray-700 rounded-full mr-3 mt-0.5 text-xs font-medium text-gray-600 dark:text-gray-300">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium">{chapter.name}</p>
                {chapter.desc && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {chapter.desc}
                  </p>
                )}
              </div>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="col-span-9 p-8">
        <Course Coursedetails={chapter} />
      </div>
    </div>
  );
};

export default New;

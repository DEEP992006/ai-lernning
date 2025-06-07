// Course.jsx
import React from 'react';

import Heading from './Heading';
import Paragraph from './Paragraph';
import Code from './Code';
import List from './List';

const Course = ({Coursedetails}) => {
  return (
    <div className="max-w-4xl  py-8 px-4 pt-18  col-span-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {Coursedetails.name}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        {Coursedetails.desc}
      </p>
      
      {Coursedetails.modules.map((module, index) => (
        <React.Fragment key={index}>
          <div 
            id={`module-${index}`}
            className="mb-8 scroll-mt-24 group/module" // Added group for hover effects
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium text-sm mt-1">
                {index + 1}
              </span>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 group-hover/module:border-blue-500 transition-colors">
                  {module.name}
                </h2>
                {module.desc && (
                  <p className="text-gray-600 dark:text-gray-400 mt-3">
                    {module.desc}
                  </p>
                )}
              </div>
            </div>
            
            <div className="space-y-6 pl-12">
              {module.content.map((content, i) => {
                switch(content.type) {
                  case "heading":
                    return <Heading key={i} text={content.text} level={content.level || 3} />;
                  case "paragraph":
                    return <Paragraph key={i} text={content.text} />;
                  case "list":
                    return <List 
                      key={i} 
                      items={content.items} 
                      variant={content.variant} 
                      iconVariant={content.iconVariant}
                    />;
                  case "code":
                    return <Code 
                      key={i} 
                      language={content.language} 
                      code={content.code} 
                      showLineNumbers={content.showLineNumbers}
                    />;
                  default:
                    return null;
                }
              })}
            </div>
          </div>
          
          {/* Simple separator line between modules */}
          {index < Coursedetails.modules.length - 1 && (
            <div className="my-8 border-t border-gray-100 dark:border-gray-800"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Course;
// List.jsx
import React from 'react';
import { 
  CheckCircleIcon,
  ChevronRightIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const List = ({ 
  items, 
  variant = 'unordered', 
  iconVariant = 'default',
  nestedLevel = 0 
}) => {
  // Icon configurations
  const iconMap = {
    default: null,
    check: <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />,
    arrow: <ChevronRightIcon className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />,
    warning: <ExclamationTriangleIcon className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />,
    tip: <LightBulbIcon className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />,
    step: <ArrowPathIcon className="h-4 w-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
  };

  // List style configuration
  const listConfig = {
    unordered: {
      container: 'ul',
      style: 'list-disc',
      nestedStyle: 'list-circle'
    },
    ordered: {
      container: 'ol',
      style: 'list-decimal',
      nestedStyle: 'list-lower-alpha'
    },
    none: {
      container: 'ul',
      style: 'list-none'
    }
  };

  const { container: ListContainer, style } = listConfig[variant];
  const paddingLeft = `${nestedLevel * 20 + 8}px`;

  return (
    <ListContainer 
      className={`${style} ${variant === 'unordered' && nestedLevel > 0 ? 'list-circle' : ''} 
        space-y-2 my-2 pl-5 text-gray-700 dark:text-gray-300`}
      style={{ paddingLeft }}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-start leading-relaxed">
          {iconVariant !== 'default' && iconMap[iconVariant]}
          
          <div className="flex-1">
            {typeof item === 'object' ? (
              <>
                {item.title && (
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {item.title}: 
                  </span>
                )}
                <span className="ml-1">{item.content}</span>
                {item.nested && (
                  <List 
                    items={item.nested} 
                    variant={variant}
                    iconVariant={iconVariant}
                    nestedLevel={nestedLevel + 1}
                  />
                )}
              </>
            ) : Array.isArray(item) ? (
              <List 
                items={item} 
                variant={variant}
                iconVariant={iconVariant}
                nestedLevel={nestedLevel + 1}
              />
            ) : (
              item
            )}
          </div>
        </li>
      ))}
    </ListContainer>
  );
};

export default List;
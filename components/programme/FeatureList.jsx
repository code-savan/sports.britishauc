import React from 'react';

export default function FeatureList({ items, iconClass = '', className = '', pill = false }) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className={`flex items-start ${pill ? 'bg-gray-100 rounded-full px-4 py-2' : ''}`}>
          {item.icon && <span className={`mr-3 mt-1 ${iconClass}`}>{item.icon}</span>}
          <span className="text-base text-gray-700">{item.text || item}</span>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';

export default function Section({ children, className = '', bg = '', padding = 'py-16', ...props }) {
  return (
    <section className={`w-full ${bg} ${padding} ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

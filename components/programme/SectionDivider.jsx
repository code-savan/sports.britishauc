import React from 'react';

export default function SectionDivider({ flip = false }) {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-16 ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z"
          fill="#e11d48" // Tailwind's primary
        />
      </svg>
    </div>
  );
}

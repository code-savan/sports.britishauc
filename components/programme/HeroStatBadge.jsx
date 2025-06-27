import React from 'react';

export default function HeroStatBadge({ text }) {
  return (
    <div className="absolute top-8 left-8 bg-white/90 text-primary font-bold px-6 py-3 rounded-full shadow-xl text-lg border-2 border-primary z-20 animate-fade-in">
      {text}
    </div>
  );
}

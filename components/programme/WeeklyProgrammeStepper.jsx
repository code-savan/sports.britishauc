import React from 'react';

export default function WeeklyProgrammeStepper({ days }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-end relative py-12">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-primary via-red-400 to-yellow-400 rounded-full z-0" style={{transform: 'translateY(-50%)'}} />
      <div className="flex flex-col md:flex-row w-full z-10 gap-12 md:gap-0">
        {days.map((day, i) => (
          <div key={i} className="flex flex-row md:flex-col items-center md:items-center flex-1 relative">
            {/* Timeline connector for mobile */}
            {i > 0 && (
              <div className="md:hidden w-1 h-8 bg-gradient-to-b from-primary via-red-400 to-yellow-400 mx-4" />
            )}
            {/* Icon in colored circle, floating above timeline */}
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 flex items-center justify-center rounded-full ${day.color || 'bg-primary'} text-white text-3xl mb-2 z-10 shadow-lg`} style={{marginBottom: '-18px'}}>
                {day.icon}
              </div>
              {/* Anchor to timeline */}
              <div className="hidden md:block w-3 h-3 rounded-full bg-white border-4 border-primary z-20" style={{marginTop: '-10px', marginBottom: '12px'}} />
            </div>
            <div className="flex flex-col items-center md:items-center flex-1 pt-8 md:pt-0">
              <div className="font-bold text-lg text-red-700 mb-2 text-center whitespace-pre-line">{day.title}</div>
              <ul className="text-base text-gray-700 text-center space-y-1 list-none p-0 m-0">
                {day.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
            {/* Timeline connector for desktop */}
            {i < days.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-gradient-to-r from-primary via-red-400 to-yellow-400 z-0" style={{left: '100%', width: 'calc(100% + 2rem)', transform: 'translateY(-50%)'}} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

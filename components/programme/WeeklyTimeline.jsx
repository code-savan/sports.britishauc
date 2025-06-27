import React from 'react';

export default function WeeklyTimeline({ days }) {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex gap-8 min-w-[700px]">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-red-400 shadow-lg mb-2 text-white text-2xl`}>{day.icon}</div>
            <div className="font-semibold text-base text-red-700 mb-1 text-center">{day.title}</div>
            <ul className="list-disc ml-4 text-sm text-gray-700 text-left space-y-1">
              {day.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
            {i < days.length - 1 && (
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-red-400 my-4 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { FaUsers, FaBed } from 'react-icons/fa';

export default function ProgrammeDurationCard({ title, color, points, age, accommodation }) {
  return (
    <div className={`rounded-2xl shadow-lg border-0 p-8 mb-6 bg-white relative overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-2 h-full rounded-l-2xl ${color}`} />
      <div className="pl-6">
        <div className="text-lg font-bold mb-2 text-gray-900">{title}</div>
        <ul className="list-disc ml-6 text-base text-gray-700 space-y-1 mb-2">
          {points.map((pt, j) => <li key={j}>{pt}</li>)}
        </ul>
        <div className="flex items-center gap-2 mt-2 mb-2">
          <FaUsers className="text-red-600 h-4 w-4" />
          <span className="text-sm font-semibold">Age: {age}</span>
        </div>
        <div className="bg-gray-50 rounded p-3 text-xs text-gray-600 mt-2 flex items-start gap-2">
          <FaBed className="mt-0.5 h-4 w-4 text-red-400" />
          <span>{accommodation}</span>
        </div>
      </div>
    </div>
  );
}

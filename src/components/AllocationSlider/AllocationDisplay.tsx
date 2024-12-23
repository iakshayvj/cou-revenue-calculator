import React from 'react';

interface AllocationDisplayProps {
  utilities: number;
  others: number;
}

export function AllocationDisplay({ utilities, others }: AllocationDisplayProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Utilities</span>
          <span className="text-sm font-semibold text-indigo-600">
            {Math.round(utilities)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-150"
            style={{ width: `${utilities}%` }}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Other Categories</span>
          <span className="text-sm font-semibold text-indigo-600">
            {Math.round(others)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-150"
            style={{ width: `${others}%` }}
          />
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CategoryAllocation } from './types';
import { SliderTrack } from './SliderTrack';
import { AllocationDisplay } from './AllocationDisplay';

interface AllocationSliderProps {
  onChange: (allocations: CategoryAllocation) => void;
}

export function AllocationSlider({ onChange }: AllocationSliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [utilities, setUtilities] = useState(60);

  const handleSliderChange = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, 0), 100);
    setUtilities(clampedValue);
    
    onChange({
      utilities: clampedValue,
      others: 100 - clampedValue
    });
  };

  return (
    <div className="w-full space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Category Allocation</h3>
      
      <div className="space-y-6">
        <AllocationDisplay 
          utilities={utilities} 
          others={100 - utilities} 
        />
        
        <SliderTrack
          value={utilities}
          onChange={handleSliderChange}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      </div>
    </div>
  );
}
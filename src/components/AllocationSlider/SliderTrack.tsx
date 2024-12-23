import React, { useRef } from 'react';

interface SliderTrackProps {
  value: number;
  onChange: (value: number) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}

export function SliderTrack({ value, onChange, onDragStart, onDragEnd }: SliderTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const calculatePercentage = (clientX: number) => {
    if (!trackRef.current) return value;
    
    const rect = trackRef.current.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    onDragStart();
    
    const handleMouseMove = (e: MouseEvent) => {
      const newValue = calculatePercentage(e.clientX);
      onChange(newValue);
    };
    
    const handleMouseUp = () => {
      onDragEnd();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e: React.MouseEvent) => {
    const newValue = calculatePercentage(e.clientX);
    onChange(newValue);
  };

  return (
    <div 
      ref={trackRef}
      className="relative h-6 bg-gray-200 rounded-full cursor-pointer"
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div 
        className="absolute inset-y-0 left-0 bg-indigo-600 rounded-l-full transition-all duration-150"
        style={{ width: `${value}%` }}
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-white border-2 border-indigo-600 rounded-full shadow-lg transition-all duration-150 hover:scale-110"
        style={{ 
          left: `${value}%`, 
          transform: `translate(-50%, -50%)` 
        }}
      />
    </div>
  );
}
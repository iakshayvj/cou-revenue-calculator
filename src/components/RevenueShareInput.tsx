import React, { useEffect } from 'react';
import { UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { BusinessDetails } from '../types/calculator';

interface RevenueShareInputProps {
  register: UseFormRegister<BusinessDetails>;
  watch: UseFormWatch<BusinessDetails>;
  setValue: UseFormSetValue<BusinessDetails>;
}

export function RevenueShareInput({ register, watch, setValue }: RevenueShareInputProps) {
  const setuShare = watch('setuShare');
  const businessShare = watch('businessShare');

  // Auto-adjust complementary share
  const handleShareChange = (field: 'setuShare' | 'businessShare', value: number) => {
    const complementaryField = field === 'setuShare' ? 'businessShare' : 'setuShare';
    const newValue = Math.max(0, Math.min(100, value));
    setValue(field, newValue);
    setValue(complementaryField, 100 - newValue);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Revenue Sharing</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Setu Share (%)
          </label>
          <input
            type="number"
            {...register('setuShare')}
            onChange={(e) => handleShareChange('setuShare', Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Business Share (%)
          </label>
          <input
            type="number"
            {...register('businessShare')}
            onChange={(e) => handleShareChange('businessShare', Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="text-sm text-gray-500">
        Total share must equal 100%
      </div>
    </div>
  );
}
import React from 'react';
import { useForm } from 'react-hook-form';
import { BusinessDetails } from '../types/calculator';
import { RevenueShareInput } from './RevenueShareInput';
import { AllocationSlider } from './AllocationSlider/AllocationSlider';

interface BusinessFormProps {
  onSubmit: (data: BusinessDetails) => void;
}

export function BusinessForm({ onSubmit }: BusinessFormProps) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BusinessDetails>({
    defaultValues: {
      activeUsers: 1000,
      billsPerUser: 3,
      averageTransactionValue: 250,
      setuShare: 30,
      businessShare: 70,
      utilityShare: 60,
      otherShare: 40,
      paymentMethod: 'UPI'
    }
  });

  const handleAllocationChange = (allocation: { utilities: number; others: number }) => {
    setValue('utilityShare', allocation.utilities);
    setValue('otherShare', allocation.others);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Active Monthly Users
        </label>
        <input
          type="number"
          {...register('activeUsers', { 
            required: 'Number of active users is required',
            min: { value: 1, message: 'Must be greater than 0' }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.activeUsers && (
          <p className="mt-1 text-sm text-red-600">{errors.activeUsers.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Average Bills per User (Monthly)
        </label>
        <input
          type="number"
          {...register('billsPerUser', { 
            required: 'This field is required',
            min: { value: 1, message: 'Must be at least 1' }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.billsPerUser && (
          <p className="mt-1 text-sm text-red-600">{errors.billsPerUser.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Average Transaction Value (₹)
        </label>
        <input
          type="number"
          {...register('averageTransactionValue', { 
            required: 'This field is required',
            min: { value: 1, message: 'Must be greater than 0' }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.averageTransactionValue && (
          <p className="mt-1 text-sm text-red-600">{errors.averageTransactionValue.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Payment Method
        </label>
        <select
          {...register('paymentMethod')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="UPI">UPI</option>
          <option value="OTHER">Other Payment Methods (2% charges)</option>
        </select>
      </div>

      <AllocationSlider onChange={handleAllocationChange} />
      
      <RevenueShareInput 
        register={register} 
        watch={watch}
        setValue={setValue}
      />

      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate Earnings
        </button>
      </div>
    </form>
  );
}
import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { CalculationResult } from '../types/calculator';

interface ResultsDisplayProps {
  results: CalculationResult;
  onBack: () => void;
}

export function ResultsDisplay({ results, onBack }: ResultsDisplayProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const yearlyRevenue = results.businessRevenue * 12;
  const totalTransactions = results.categoryBreakdown.reduce(
    (sum, category) => sum + category.transactions, 
    0
  );

  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="flex items-center text-indigo-600 hover:text-indigo-500"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculator
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
          <h3 className="text-lg font-medium mb-2">Monthly Business Revenue</h3>
          <p className="text-3xl font-bold">{formatCurrency(results.businessRevenue)}</p>
          <p className="mt-2 text-indigo-100">Yearly: {formatCurrency(yearlyRevenue)}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-gray-900">Total BBPS Transactions</h3>
            <div className="group relative">
              <HelpCircle className="h-4 w-4 text-gray-400" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Based on {totalTransactions / 3} users × 3 bills per month
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {totalTransactions.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">Monthly transactions</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Category Breakdown</h3>
        <div className="space-y-4">
          {results.categoryBreakdown.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{item.category}</p>
                <p className="text-sm text-gray-500">
                  {item.transactions.toLocaleString()} transactions
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">
                  {formatCurrency(item.businessRevenue)}
                </p>
                <p className="text-sm text-gray-500">
                  Monthly revenue
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {results.gatewayCharges > 0 && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Gateway Charges</h3>
          <p className="font-medium text-gray-900">
            {formatCurrency(results.gatewayCharges)}
          </p>
          <p className="text-sm text-gray-500 mt-1">Monthly charges</p>
        </div>
      )}
    </div>
  );
}
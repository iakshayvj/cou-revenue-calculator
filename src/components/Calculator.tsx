import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { BusinessDetails, CalculationResult } from '../types/calculator';
import { BusinessForm } from './BusinessForm';
import { ResultsDisplay } from './ResultsDisplay';
import { InterchangeTable } from './InterchangeTable';
import { calculateBusinessEarnings } from '../utils/calculations';

export function BBPSCalculator() {
  const [step, setStep] = useState<'form' | 'results'>('form');
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'rates'>('calculator');

  const handleSubmit = (details: BusinessDetails) => {
    const calculatedResults = calculateBusinessEarnings(details);
    setResults(calculatedResults);
    setStep('results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Calculator className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BBPS Earnings Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your potential revenue from BBPS bill payment solutions
          </p>
        </div>

        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`${
                  activeTab === 'calculator'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/2 py-4 px-1 text-center border-b-2 font-medium`}
              >
                Calculator
              </button>
              <button
                onClick={() => setActiveTab('rates')}
                className={`${
                  activeTab === 'rates'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/2 py-4 px-1 text-center border-b-2 font-medium`}
              >
                Interchange Rates
              </button>
            </nav>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            {activeTab === 'calculator' ? (
              step === 'form' ? (
                <BusinessForm onSubmit={handleSubmit} />
              ) : (
                <ResultsDisplay 
                  results={results!}
                  onBack={() => setStep('form')}
                />
              )
            ) : (
              <InterchangeTable />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
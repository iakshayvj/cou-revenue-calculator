export const feeAnalysis = {
  lowestFixedFees: {
    category: 'NPS',
    interchange: 0.5,
    switchingFee: 0.15
  },
  highestFixedFees: {
    category: 'Loan Repayments/Mutual Funds',
    interchange: 5,
    switchingFee: 0.5
  },
  lowestPercentageFees: {
    category: 'FASTag Recharge',
    interchange: '0.15%',
    switchingFee: '0.03%'
  },
  highestPercentageFees: {
    category: 'DTH (Videocon/Dish)',
    interchange: '1.50%',
    switchingFee: '0.03%'
  },
  keyObservations: [
    'Utilities consistently have lower fixed fees (₹2.25 + ₹0.3)',
    'Education and Housing fees scale significantly with transaction value',
    'B2B payments have the most granular tier structure',
    'DTH providers have varying percentage-based fees',
    'Most percentage-based categories have 0.03% switching fee'
  ]
};
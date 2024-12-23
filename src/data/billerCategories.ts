// Utility function to calculate interchange based on transaction value
const calculateInterchange = (category: string, transactionValue: number): number => {
  switch (category) {
    case 'utilities':
      return 2.25; // Fixed ₹2.25 per transaction
    case 'loan_repayments':
      return 5.00; // Fixed ₹5 per transaction
    case 'others':
      if (transactionValue <= 10000) return 5.00;
      if (transactionValue <= 50000) return 10.00;
      return 20.00;
    default:
      return 2.25; // Default case
  }
};

// Utility function to calculate NPCI switching fee
const calculateSwitchingFee = (category: string, transactionValue: number): number => {
  switch (category) {
    case 'utilities':
      return 0.30; // Fixed ₹0.30 per transaction
    case 'loan_repayments':
      return 0.50; // Fixed ₹0.50 per transaction
    case 'others':
      return 0.50; // Fixed ₹0.50 per transaction
    default:
      return 0.30;
  }
};

export const billerCategories = [
  {
    id: 'utilities',
    name: 'Utilities (Electricity, Gas, Water)',
    volumeShare: 0.60, // 60% of total volume
    calculateInterchange,
    calculateSwitchingFee,
  },
  {
    id: 'loan_repayments',
    name: 'Loan Repayments',
    volumeShare: 0.15, // 15% of total volume
    calculateInterchange,
    calculateSwitchingFee,
  },
  {
    id: 'others',
    name: 'Other Categories',
    volumeShare: 0.25, // 25% of total volume
    calculateInterchange,
    calculateSwitchingFee,
  }
];
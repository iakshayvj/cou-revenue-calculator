export const valueBasedCategories = {
  education: {
    name: 'Education Fees',
    tiers: [
      { range: '≤ ₹10,000', interchange: 5, switchingFee: 0.5 },
      { range: '₹10,000 - ₹50,000', interchange: 10, switchingFee: 0.5 },
      { range: '≥ ₹50,000', interchange: 20, switchingFee: 0.5 }
    ]
  },
  housing: {
    name: 'Housing Society',
    tiers: [
      { range: '≤ ₹10,000', interchange: 5, switchingFee: 0.5 },
      { range: '₹10,000 - ₹50,000', interchange: 10, switchingFee: 0.5 },
      { range: '≥ ₹50,000', interchange: 20, switchingFee: 0.5 }
    ]
  },
  b2b: {
    name: 'B2B Payments',
    tiers: [
      { range: '≤ ₹10,000', interchange: 2, switchingFee: 0.5 },
      { range: '₹10,000 - ₹25,000', interchange: 3, switchingFee: 0.5 },
      { range: '₹25,000 - ₹1,00,000', interchange: 5, switchingFee: 0.5 },
      { range: '> ₹1,00,000', interchange: 10, switchingFee: 0.5 }
    ]
  }
};
export interface FeeStructure {
  interchange: number | string;
  switchingFee: number | string;
  transactionRange?: string;
}

export interface BillerCategory {
  name: string;
  subCategories?: { [key: string]: FeeStructure };
  feeStructure?: FeeStructure;
  valueBasedFees?: FeeStructure[];
}

export const fixedFeeCategories: { [key: string]: BillerCategory } = {
  utilities: {
    name: 'Utilities',
    subCategories: {
      electricity: { interchange: 2.25, switchingFee: 0.3 },
      gas: { interchange: 2.25, switchingFee: 0.3 },
      water: { interchange: 2.25, switchingFee: 0.3 },
      lpg: { interchange: 2.25, switchingFee: 0.3 }
    }
  },
  telecom: {
    name: 'Telecom',
    subCategories: {
      postpaid: { interchange: 2.5, switchingFee: 0.3 },
      broadband: { interchange: 2.5, switchingFee: 0.3 },
      cable: { interchange: 2.5, switchingFee: 0.3 }
    }
  },
  financial: {
    name: 'Financial Services',
    subCategories: {
      loanRepayment: { interchange: 5, switchingFee: 0.5 },
      recurringDeposits: { interchange: 5, switchingFee: 0.5 },
      creditCard: { interchange: 3.5, switchingFee: 0.5 },
      mutualFund: { interchange: 5, switchingFee: 0.5 },
      nps: { interchange: 0.5, switchingFee: 0.15 }
    }
  }
};
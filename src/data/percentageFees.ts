export const percentageBasedCategories = {
  dth: {
    name: 'DTH Services',
    providers: {
      tataSky: { interchange: 0.75, switchingFee: 0.03 },
      airtel: { interchange: 0.60, switchingFee: 0.03 },
      videocon: { interchange: 1.50, switchingFee: 0.03 },
      dish: { interchange: 1.50, switchingFee: 0.03 }
    }
  },
  subscriptions: {
    name: 'Subscription Services',
    types: {
      ottAndMagazines: { interchange: 1.00, switchingFee: 0.03 },
      musicAndOnline: { interchange: 0.50, switchingFee: 0.03 },
      educationApps: { interchange: 1.50, switchingFee: 0.03 },
      healthAndFitness: { interchange: 1.20, switchingFee: 0.03 }
    }
  },
  other: {
    name: 'Other Services',
    types: {
      fastagRecharge: { interchange: 0.15, switchingFee: 0.03 },
      mobilePrepaid: { interchange: "Variable", switchingFee: 0.03 }
    }
  }
};
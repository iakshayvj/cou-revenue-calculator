import { BusinessDetails, CalculationResult } from '../types/calculator';

export function calculateBusinessEarnings(details: BusinessDetails): CalculationResult {
  const totalMonthlyTransactions = details.activeUsers * details.billsPerUser;
  const gatewayChargeRate = details.paymentMethod === 'OTHER' ? 0.02 : 0;

  // Calculate for utilities (fixed rate of 2.25)
  const utilityTransactions = Math.round(totalMonthlyTransactions * (details.utilityShare / 100));
  const utilityInterchange = utilityTransactions * 2.25;
  const utilitySwitchingFees = utilityTransactions * 0.3;

  // Calculate for others (using average rate of 5 for simplicity)
  const otherTransactions = Math.round(totalMonthlyTransactions * (details.otherShare / 100));
  const otherInterchange = otherTransactions * 5;
  const otherSwitchingFees = otherTransactions * 0.5;

  const totalRevenue = utilityInterchange + otherInterchange - utilitySwitchingFees - otherSwitchingFees;
  const gatewayCharges = details.paymentMethod === 'OTHER' ? 
    (totalMonthlyTransactions * details.averageTransactionValue * gatewayChargeRate) : 0;

  const netRevenue = totalRevenue - gatewayCharges;
  const setuRevenue = netRevenue * (details.setuShare / 100);
  const businessRevenue = netRevenue * (details.businessShare / 100);

  const categoryBreakdown = [
    {
      category: 'Utilities',
      transactions: utilityTransactions,
      revenue: utilityInterchange - utilitySwitchingFees,
      setuRevenue: (utilityInterchange - utilitySwitchingFees) * (details.setuShare / 100),
      businessRevenue: (utilityInterchange - utilitySwitchingFees) * (details.businessShare / 100)
    },
    {
      category: 'Other Categories',
      transactions: otherTransactions,
      revenue: otherInterchange - otherSwitchingFees,
      setuRevenue: (otherInterchange - otherSwitchingFees) * (details.setuShare / 100),
      businessRevenue: (otherInterchange - otherSwitchingFees) * (details.businessShare / 100)
    }
  ];

  return {
    totalRevenue,
    setuRevenue,
    businessRevenue,
    categoryBreakdown,
    gatewayCharges
  };
}
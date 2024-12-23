export interface BusinessDetails {
  activeUsers: number;
  billsPerUser: number;
  averageTransactionValue: number;
  paymentMethod: 'UPI' | 'OTHER';
  setuShare: number;
  businessShare: number;
  utilityShare: number;
  otherShare: number;
}

export interface CategoryBreakdown {
  category: string;
  revenue: number;
  transactions: number;
  setuRevenue: number;
  businessRevenue: number;
}

export interface CalculationResult {
  totalRevenue: number;
  setuRevenue: number;
  businessRevenue: number;
  categoryBreakdown: CategoryBreakdown[];
  gatewayCharges: number;
}
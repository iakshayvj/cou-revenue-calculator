export const validateRevenueShare = (setuShare: number, businessShare: number): string | null => {
  if (setuShare + businessShare !== 100) {
    return 'Revenue shares must total 100%';
  }
  if (setuShare < 0 || businessShare < 0) {
    return 'Shares cannot be negative';
  }
  return null;
};
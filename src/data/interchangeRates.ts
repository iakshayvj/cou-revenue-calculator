import { fixedFeeCategories } from './feeCategories';
import { percentageBasedCategories } from './percentageFees';
import { valueBasedCategories } from './valueBasedFees';

export interface InterchangeRate {
  category: string;
  subCategory?: string;
  transactionRange?: string;
  netInterchange: string | number;
}

function calculateNetInterchange(interchange: number | string, switchingFee: number | string): string | number {
  if (typeof interchange === 'number' && typeof switchingFee === 'number') {
    return +(interchange - switchingFee).toFixed(2);
  }
  if (typeof interchange === 'string' && interchange.includes('%')) {
    return interchange; // Keep percentage as is
  }
  return 'Variable';
}

// Convert fixed fee categories
const fixedFeeRates: InterchangeRate[] = Object.entries(fixedFeeCategories).flatMap(([_, category]) =>
  Object.entries(category.subCategories || {}).map(([subCat, fees]) => ({
    category: category.name,
    subCategory: subCat.charAt(0).toUpperCase() + subCat.slice(1),
    netInterchange: calculateNetInterchange(fees.interchange, fees.switchingFee)
  }))
);

// Convert percentage based categories
const percentageRates: InterchangeRate[] = Object.entries(percentageBasedCategories).flatMap(([_, category]) =>
  Object.entries(category.providers || category.types || {}).map(([name, fees]) => ({
    category: category.name,
    subCategory: name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1'),
    netInterchange: typeof fees.interchange === 'number' ? `${fees.interchange}%` : fees.interchange
  }))
);

// Convert value based categories
const valueBasedRates: InterchangeRate[] = Object.entries(valueBasedCategories).flatMap(([_, category]) =>
  category.tiers.map(tier => ({
    category: category.name,
    transactionRange: tier.range,
    netInterchange: calculateNetInterchange(tier.interchange, tier.switchingFee)
  }))
);

export const interchangeRates: InterchangeRate[] = [
  ...fixedFeeRates,
  ...percentageRates,
  ...valueBasedRates
].sort((a, b) => a.category.localeCompare(b.category));
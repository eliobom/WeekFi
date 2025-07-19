import { useState, useEffect } from 'react';
import { INVESTMENT_PLANS } from '../utils/constants';

interface CalculationResults {
  weeklyReturn: number;
  monthlyReturn: number;
  yearlyReturn: number;
  totalReturn: number;
}

export const useInvestmentCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [plan, setPlan] = useState('premium');
  const [period, setPeriod] = useState('weekly');
  const [results, setResults] = useState<CalculationResults>({
    weeklyReturn: 0,
    monthlyReturn: 0,
    yearlyReturn: 0,
    totalReturn: 0
  });

  const calculateReturns = () => {
    const selectedPlan = INVESTMENT_PLANS[plan as keyof typeof INVESTMENT_PLANS];
    const rate = selectedPlan.rate;
    
    if (period === 'weekly') {
      const weeklyReturn = amount * rate;
      const monthlyReturn = weeklyReturn * 4.33; // Average weeks per month
      const yearlyReturn = weeklyReturn * 52;
      const totalReturn = amount + yearlyReturn;
      
      setResults({
        weeklyReturn,
        monthlyReturn,
        yearlyReturn,
        totalReturn
      });
    } else { // bi-weekly
      const biWeeklyReturn = amount * (rate * 2);
      const monthlyReturn = biWeeklyReturn * 2.15; // Average bi-weeks per month
      const yearlyReturn = biWeeklyReturn * 26;
      const totalReturn = amount + yearlyReturn;
      
      setResults({
        weeklyReturn: biWeeklyReturn,
        monthlyReturn,
        yearlyReturn,
        totalReturn
      });
    }
  };

  useEffect(() => {
    calculateReturns();
  }, [amount, plan, period]);

  return {
    amount,
    setAmount,
    plan,
    setPlan,
    period,
    setPeriod,
    results,
    plans: INVESTMENT_PLANS
  };
};
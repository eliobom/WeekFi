import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react';

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [plan, setPlan] = useState('premium');
  const [period, setPeriod] = useState('weekly');
  const [results, setResults] = useState({
    weeklyReturn: 0,
    monthlyReturn: 0,
    yearlyReturn: 0,
    totalReturn: 0
  });

  const plans = {
    basic: { rate: 0.08, name: 'Plan Básico', color: 'from-blue-500 to-blue-600' },
    premium: { rate: 0.12, name: 'Plan Premium', color: 'from-amber-500 to-orange-500' },
    elite: { rate: 0.15, name: 'Plan Elite', color: 'from-emerald-500 to-emerald-600' }
  };

  const calculateReturns = () => {
    const selectedPlan = plans[plan as keyof typeof plans];
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculadora de Inversiones</h1>
        <p className="text-gray-600">Calcula tus potenciales ganancias con nuestros planes de inversión</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Calculator className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Configuración</h2>
          </div>

          <div className="space-y-6">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monto de Inversión
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1000"
                  min="100"
                  step="100"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">Monto mínimo: $100</p>
            </div>

            {/* Plan Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Plan de Inversión
              </label>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(plans).map(([key, planData]) => (
                  <label key={key} className="relative">
                    <input
                      type="radio"
                      name="plan"
                      value={key}
                      checked={plan === key}
                      onChange={(e) => setPlan(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      plan === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{planData.name}</h3>
                          <p className="text-sm text-gray-600">{(planData.rate * 100)}% rendimiento</p>
                        </div>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${planData.color} flex items-center justify-center`}>
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Period Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frecuencia de Pago
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="relative">
                  <input
                    type="radio"
                    name="period"
                    value="weekly"
                    checked={period === 'weekly'}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-lg border-2 cursor-pointer transition-all text-center ${
                    period === 'weekly' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <Calendar className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                    <span className="text-sm font-medium">Semanal</span>
                  </div>
                </label>
                <label className="relative">
                  <input
                    type="radio"
                    name="period"
                    value="biweekly"
                    checked={period === 'biweekly'}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-lg border-2 cursor-pointer transition-all text-center ${
                    period === 'biweekly' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <Calendar className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                    <span className="text-sm font-medium">Quincenal</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Proyección de Ganancias</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">
                      Ganancia {period === 'weekly' ? 'Semanal' : 'Quincenal'}
                    </p>
                    <p className="text-2xl font-bold text-blue-900">
                      {formatCurrency(results.weeklyReturn)}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-600 font-medium">Ganancia Mensual</p>
                    <p className="text-2xl font-bold text-emerald-900">
                      {formatCurrency(results.monthlyReturn)}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-amber-600 font-medium">Ganancia Anual</p>
                    <p className="text-2xl font-bold text-amber-900">
                      {formatCurrency(results.yearlyReturn)}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-amber-600" />
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">Total Después de 1 Año</p>
                    <p className="text-3xl font-bold text-purple-900">
                      {formatCurrency(results.totalReturn)}
                    </p>
                    <p className="text-sm text-purple-600">
                      Inversión inicial: {formatCurrency(amount)}
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">¿Listo para invertir?</h3>
            <p className="text-blue-100 mb-4">
              Con una inversión de {formatCurrency(amount)} podrías ganar {formatCurrency(results.yearlyReturn)} al año
            </p>
            <button className="w-full bg-white text-blue-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Comenzar Inversión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
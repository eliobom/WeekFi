// Application Constants

export const COLORS = {
  primary: {
    blue: '#1e3a8a',
    emerald: '#10b981',
    amber: '#f59e0b'
  },
  gradients: {
    primary: 'from-blue-900 to-emerald-600',
    secondary: 'from-amber-500 to-orange-500',
    accent: 'from-emerald-500 to-teal-600',
    hero: 'from-slate-900 via-blue-900 to-emerald-900'
  }
};

export const INVESTMENT_PLANS = {
  basic: {
    id: 'basic',
    name: 'Plan Básico',
    rate: 0.08,
    minInvestment: 100,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-900'
  },
  premium: {
    id: 'premium',
    name: 'Plan Premium',
    rate: 0.12,
    minInvestment: 500,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-100',
    borderColor: 'border-amber-400',
    textColor: 'text-amber-900',
    popular: true
  },
  elite: {
    id: 'elite',
    name: 'Plan Elite',
    rate: 0.15,
    minInvestment: 2000,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-teal-100',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-900'
  }
};

export const ANIMATION_DELAYS = {
  short: 300,
  medium: 500,
  long: 1000
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};
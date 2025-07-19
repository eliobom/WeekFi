// Tipos para el sistema de referidos
export interface ReferralCode {
  id: string;
  userId: string;
  code: string;
  isActive: boolean;
  createdAt: Date;
  expiresAt?: Date;
}

export interface Referral {
  id: string;
  referrerId: string; // Usuario que refiere
  referredId: string; // Usuario referido
  referralCode: string;
  status: 'pending' | 'active' | 'inactive';
  registrationDate: Date;
  firstInvestmentDate?: Date;
}

export interface Commission {
  id: string;
  referralId: string;
  referrerId: string;
  referredId: string;
  investmentId: string;
  investmentAmount: number;
  commissionRate: number;
  commissionAmount: number;
  status: 'pending' | 'paid' | 'cancelled';
  createdAt: Date;
  paidAt?: Date;
}

export interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  totalCommissionsEarned: number;
  pendingCommissions: number;
  thisMonthCommissions: number;
  referralConversionRate: number;
}

export interface ReferralSettings {
  commissionRate: number; // Porcentaje (ej: 0.05 = 5%)
  maxCommissionPerReferral: number; // Límite máximo por referido
  commissionDuration: 'first_investment' | 'lifetime' | 'limited_time';
  commissionDurationDays?: number; // Si es limited_time
  minimumInvestmentForCommission: number;
  maxReferralsPerUser?: number;
}
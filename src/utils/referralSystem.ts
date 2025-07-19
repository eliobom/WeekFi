import { ReferralCode, Referral, Commission, ReferralSettings } from '../types/referral';

// Configuración del sistema de referidos
export const REFERRAL_CONFIG: ReferralSettings = {
  commissionRate: 0.08, // 8% de comisión
  maxCommissionPerReferral: 1000, // Máximo $1000 por referido
  commissionDuration: 'lifetime', // Comisión de por vida
  minimumInvestmentForCommission: 100, // Inversión mínima de $100
  maxReferralsPerUser: 50 // Máximo 50 referidos por usuario
};

// Generar código de referido único
export const generateReferralCode = (userId: string): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  const userHash = userId.substring(0, 4);
  return `REF${userHash}${timestamp}${randomStr}`.toUpperCase();
};

// Validar código de referido
export const validateReferralCode = (code: string): boolean => {
  const codeRegex = /^REF[A-Z0-9]{12,16}$/;
  return codeRegex.test(code);
};

// Calcular comisión
export const calculateCommission = (
  investmentAmount: number,
  referralDate: Date,
  settings: ReferralSettings = REFERRAL_CONFIG
): number => {
  // Verificar inversión mínima
  if (investmentAmount < settings.minimumInvestmentForCommission) {
    return 0;
  }

  // Calcular comisión base
  let commission = investmentAmount * settings.commissionRate;

  // Aplicar límite máximo
  commission = Math.min(commission, settings.maxCommissionPerReferral);

  // Verificar duración de comisión
  if (settings.commissionDuration === 'limited_time' && settings.commissionDurationDays) {
    const daysSinceReferral = Math.floor(
      (Date.now() - referralDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (daysSinceReferral > settings.commissionDurationDays) {
      return 0;
    }
  }

  return Math.round(commission * 100) / 100; // Redondear a 2 decimales
};

// Detectar posible fraude
export const detectFraud = (
  referrerId: string,
  referredEmail: string,
  referredIP: string,
  existingReferrals: Referral[]
): { isFraud: boolean; reason?: string } => {
  // Verificar auto-referido (mismo email domain)
  const referrerDomain = referrerId.split('@')[1];
  const referredDomain = referredEmail.split('@')[1];
  
  if (referrerDomain === referredDomain) {
    return { isFraud: true, reason: 'Same email domain detected' };
  }

  // Verificar múltiples referidos desde la misma IP
  const sameIPReferrals = existingReferrals.filter(r => 
    r.referrerId === referrerId && 
    // Aquí compararías con IP almacenada
    false // Placeholder
  );

  if (sameIPReferrals.length >= 3) {
    return { isFraud: true, reason: 'Multiple referrals from same IP' };
  }

  // Verificar velocidad de referidos (más de 5 en 24 horas)
  const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recentReferrals = existingReferrals.filter(r => 
    r.referrerId === referrerId && 
    r.registrationDate > last24Hours
  );

  if (recentReferrals.length >= 5) {
    return { isFraud: true, reason: 'Too many referrals in 24 hours' };
  }

  return { isFraud: false };
};

// Formatear código de referido para mostrar
export const formatReferralCode = (code: string): string => {
  return code.replace(/(.{3})/g, '$1-').slice(0, -1);
};

// Generar enlace de referido
export const generateReferralLink = (code: string): string => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/register?ref=${code}`;
};
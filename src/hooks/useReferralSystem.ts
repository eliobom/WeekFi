import { useState, useEffect } from 'react';
import { ReferralStats, Commission, Referral } from '../types/referral';
import { generateReferralCode, calculateCommission, REFERRAL_CONFIG } from '../utils/referralSystem';

export const useReferralSystem = (userId: string) => {
  const [referralCode, setReferralCode] = useState<string>('');
  const [referralStats, setReferralStats] = useState<ReferralStats>({
    totalReferrals: 0,
    activeReferrals: 0,
    totalCommissionsEarned: 0,
    pendingCommissions: 0,
    thisMonthCommissions: 0,
    referralConversionRate: 0
  });
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Generar o recuperar código de referido
  useEffect(() => {
    const initializeReferralCode = async () => {
      try {
        // Aquí harías la llamada a la API para obtener o crear el código
        const existingCode = localStorage.getItem(`referral_code_${userId}`);
        
        if (existingCode) {
          setReferralCode(existingCode);
        } else {
          const newCode = generateReferralCode(userId);
          localStorage.setItem(`referral_code_${userId}`, newCode);
          setReferralCode(newCode);
        }
      } catch (error) {
        console.error('Error initializing referral code:', error);
      }
    };

    if (userId) {
      initializeReferralCode();
    }
  }, [userId]);

  // Cargar datos de referidos
  useEffect(() => {
    const loadReferralData = async () => {
      setIsLoading(true);
      try {
        // Simular datos para demo
        const mockReferrals: Referral[] = [
          {
            id: '1',
            referrerId: userId,
            referredId: 'user2',
            referralCode: referralCode,
            status: 'active',
            registrationDate: new Date('2024-01-15'),
            firstInvestmentDate: new Date('2024-01-16')
          },
          {
            id: '2',
            referrerId: userId,
            referredId: 'user3',
            referralCode: referralCode,
            status: 'active',
            registrationDate: new Date('2024-01-20'),
            firstInvestmentDate: new Date('2024-01-22')
          }
        ];

        const mockCommissions: Commission[] = [
          {
            id: '1',
            referralId: '1',
            referrerId: userId,
            referredId: 'user2',
            investmentId: 'inv1',
            investmentAmount: 1000,
            commissionRate: REFERRAL_CONFIG.commissionRate,
            commissionAmount: 80,
            status: 'paid',
            createdAt: new Date('2024-01-16'),
            paidAt: new Date('2024-01-17')
          },
          {
            id: '2',
            referralId: '2',
            referrerId: userId,
            referredId: 'user3',
            investmentId: 'inv2',
            investmentAmount: 500,
            commissionRate: REFERRAL_CONFIG.commissionRate,
            commissionRate: 0.08,
            commissionAmount: 40,
            status: 'pending',
            createdAt: new Date('2024-01-22')
          }
        ];

        setReferrals(mockReferrals);
        setCommissions(mockCommissions);

        // Calcular estadísticas
        const totalCommissions = mockCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
        const pendingCommissions = mockCommissions
          .filter(c => c.status === 'pending')
          .reduce((sum, c) => sum + c.commissionAmount, 0);
        
        const thisMonth = new Date();
        thisMonth.setDate(1);
        const thisMonthCommissions = mockCommissions
          .filter(c => c.createdAt >= thisMonth)
          .reduce((sum, c) => sum + c.commissionAmount, 0);

        setReferralStats({
          totalReferrals: mockReferrals.length,
          activeReferrals: mockReferrals.filter(r => r.status === 'active').length,
          totalCommissionsEarned: totalCommissions,
          pendingCommissions,
          thisMonthCommissions,
          referralConversionRate: mockReferrals.filter(r => r.firstInvestmentDate).length / mockReferrals.length * 100
        });

      } catch (error) {
        console.error('Error loading referral data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (referralCode) {
      loadReferralData();
    }
  }, [userId, referralCode]);

  const shareReferralCode = async (method: 'copy' | 'email' | 'whatsapp' | 'telegram') => {
    const referralLink = `${window.location.origin}/register?ref=${referralCode}`;
    const message = `¡Únete a WeekFi y comienza a invertir! Usa mi código de referido: ${referralCode} o este enlace: ${referralLink}`;

    switch (method) {
      case 'copy':
        await navigator.clipboard.writeText(referralLink);
        break;
      case 'email':
        window.open(`mailto:?subject=Únete a WeekFi&body=${encodeURIComponent(message)}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(message)}`);
        break;
    }
  };

  return {
    referralCode,
    referralStats,
    commissions,
    referrals,
    isLoading,
    shareReferralCode
  };
};
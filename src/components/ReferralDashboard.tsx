import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  Share2, 
  Copy, 
  Mail, 
  MessageCircle,
  Send,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Gift,
  Target,
  Star,
  ExternalLink
} from 'lucide-react';
import { useReferralSystem } from '../hooks/useReferralSystem';
import { formatCurrency } from '../utils/formatters';

interface ReferralDashboardProps {
  userId: string;
}

const ReferralDashboard: React.FC<ReferralDashboardProps> = ({ userId }) => {
  const { 
    referralCode, 
    referralStats, 
    commissions, 
    referrals, 
    isLoading, 
    shareReferralCode 
  } = useReferralSystem(userId);
  
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'commissions' | 'referrals'>('overview');

  const handleCopyCode = async () => {
    await shareReferralCode('copy');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const referralLink = `${window.location.origin}/register?ref=${referralCode}`;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Programa de Referidos</h1>
        <p className="text-gray-600">Gana comisiones invitando amigos a WeekFi</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-900">{referralStats.totalReferrals}</span>
          </div>
          <h3 className="font-semibold text-blue-900 mb-1">Total Referidos</h3>
          <p className="text-sm text-blue-600">{referralStats.activeReferrals} activos</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-emerald-900">
              {formatCurrency(referralStats.totalCommissionsEarned)}
            </span>
          </div>
          <h3 className="font-semibold text-emerald-900 mb-1">Total Ganado</h3>
          <p className="text-sm text-emerald-600">Comisiones acumuladas</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-amber-900">
              {formatCurrency(referralStats.pendingCommissions)}
            </span>
          </div>
          <h3 className="font-semibold text-amber-900 mb-1">Pendiente</h3>
          <p className="text-sm text-amber-600">Por procesar</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-purple-900">
              {referralStats.referralConversionRate.toFixed(1)}%
            </span>
          </div>
          <h3 className="font-semibold text-purple-900 mb-1">Conversión</h3>
          <p className="text-sm text-purple-600">Tasa de éxito</p>
        </div>
      </div>

      {/* Referral Code Section */}
      <div className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-2xl p-8 text-white mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Tu Código de Referido</h2>
            <div className="bg-white/20 backdrop-blur-xl rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black tracking-wider">{referralCode}</span>
                <button
                  onClick={handleCopyCode}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
                >
                  {copiedCode ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-blue-100 text-sm">
                Comparte este código con tus amigos para ganar comisiones
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => shareReferralCode('whatsapp')}
                className="bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => shareReferralCode('email')}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Gift className="w-6 h-6 mr-2" />
              Cómo Funciona
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <p className="font-semibold">Comparte tu código</p>
                  <p className="text-blue-100 text-sm">Invita amigos con tu código único</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <p className="font-semibold">Ellos se registran</p>
                  <p className="text-blue-100 text-sm">Usando tu código de referido</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <p className="font-semibold">Ganas comisiones</p>
                  <p className="text-blue-100 text-sm">8% de cada inversión que realicen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Resumen', icon: Target },
              { id: 'commissions', name: 'Comisiones', icon: DollarSign },
              { id: 'referrals', name: 'Referidos', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rendimiento Este Mes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Comisiones ganadas</span>
                <span className="font-semibold text-emerald-600">
                  {formatCurrency(referralStats.thisMonthCommissions)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Nuevos referidos</span>
                <span className="font-semibold text-blue-600">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tasa de conversión</span>
                <span className="font-semibold text-purple-600">
                  {referralStats.referralConversionRate.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximos Objetivos</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">10 Referidos</span>
                  <span className="text-sm text-gray-500">{referralStats.totalReferrals}/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${Math.min((referralStats.totalReferrals / 10) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Recompensa: Bonus de $50</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">$500 en Comisiones</span>
                  <span className="text-sm text-gray-500">
                    {formatCurrency(referralStats.totalCommissionsEarned)}/500
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full" 
                    style={{ width: `${Math.min((referralStats.totalCommissionsEarned / 500) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Recompensa: Upgrade a VIP</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'commissions' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Historial de Comisiones</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referido
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Inversión
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comisión
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {commissions.map((commission) => (
                  <tr key={commission.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {commission.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Usuario {commission.referredId.slice(-4)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(commission.investmentAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">
                      {formatCurrency(commission.commissionAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        commission.status === 'paid' 
                          ? 'bg-emerald-100 text-emerald-800'
                          : commission.status === 'pending'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {commission.status === 'paid' ? 'Pagado' : 
                         commission.status === 'pending' ? 'Pendiente' : 'Cancelado'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'referrals' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Mis Referidos</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha Registro
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Primera Inversión
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comisiones Generadas
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {referrals.map((referral) => {
                  const userCommissions = commissions.filter(c => c.referredId === referral.referredId);
                  const totalCommissions = userCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
                  
                  return (
                    <tr key={referral.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Usuario {referral.referredId.slice(-4)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {referral.registrationDate.toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {referral.firstInvestmentDate 
                          ? referral.firstInvestmentDate.toLocaleDateString()
                          : 'Pendiente'
                        }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          referral.status === 'active' 
                            ? 'bg-emerald-100 text-emerald-800'
                            : referral.status === 'pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {referral.status === 'active' ? 'Activo' : 
                           referral.status === 'pending' ? 'Pendiente' : 'Inactivo'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">
                        {formatCurrency(totalCommissions)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralDashboard;
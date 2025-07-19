import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Calendar, ArrowUpRight, ArrowDownRight, Bell, Eye, EyeOff, Target, Award, Zap, Crown, Gift, Star, ChevronRight, PlusCircle, Wallet, BarChart3, TrendingDown } from 'lucide-react';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  
  const stats = [
    {
      title: 'Balance Total',
      value: showBalance ? '$12,456.78' : '••••••',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-blue-600 to-indigo-700',
      bgGradient: 'from-blue-50 via-indigo-50 to-purple-50',
      progress: 85
    },
    {
      title: 'Ganancias del Mes',
      value: showBalance ? '$2,891.34' : '••••••',
      change: '+8.2%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'from-emerald-600 to-teal-700',
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50',
      progress: 92
    },
    {
      title: 'Inversiones Activas',
      value: '7',
      change: '+2 esta semana',
      changeType: 'positive',
      icon: Users,
      color: 'from-amber-600 to-orange-700',
      bgGradient: 'from-amber-50 via-orange-50 to-red-50',
      progress: 70
    },
    {
      title: 'Próximo Pago',
      value: '3 días',
      change: showBalance ? '$1,250.00' : '••••••',
      changeType: 'neutral',
      icon: Calendar,
      color: 'from-purple-600 to-violet-700',
      bgGradient: 'from-purple-50 via-violet-50 to-fuchsia-50',
      progress: 60
    }
  ];

  const achievements = [
    { title: 'Inversor Consistente', icon: Target, color: 'text-blue-600', unlocked: true },
    { title: 'Meta Mensual', icon: Award, color: 'text-emerald-600', unlocked: true },
    { title: 'Referidor Estrella', icon: Star, color: 'text-amber-600', unlocked: false },
    { title: 'VIP Elite', icon: Crown, color: 'text-purple-600', unlocked: false }
  ];

  const quickActions = [
    { title: 'Nueva Inversión', icon: PlusCircle, color: 'from-blue-600 to-indigo-700', description: 'Aumenta tu portafolio' },
    { title: 'Retirar Fondos', icon: Wallet, color: 'from-emerald-600 to-teal-700', description: 'Accede a tus ganancias' },
    { title: 'Ver Reportes', icon: BarChart3, color: 'from-purple-600 to-violet-700', description: 'Analiza tu rendimiento' },
    { title: 'Invitar Amigos', icon: Gift, color: 'from-amber-600 to-orange-700', description: 'Gana comisiones extra' }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'deposit',
      description: 'Pago de Rendimientos - Plan Premium',
      amount: '+$1,250.00',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'investment',
      description: 'Nueva Inversión - Plan Elite',
      amount: '-$5,000.00',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'deposit',
      description: 'Pago de Rendimientos - Plan Básico',
      amount: '+$450.00',
      date: '2024-01-13',
      status: 'completed'
    },
    {
      id: 4,
      type: 'referral',
      description: 'Comisión por Referido',
      amount: '+$125.00',
      date: '2024-01-12',
      status: 'completed'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'Pago Procesado',
      message: 'Su pago de $1,250.00 ha sido procesado exitosamente',
      time: '2 horas',
      type: 'success'
    },
    {
      id: 2,
      title: 'Nueva Oportunidad',
      message: 'Plan Elite con 15% de rendimiento ahora disponible',
      time: '5 horas',
      type: 'info'
    },
    {
      id: 3,
      title: 'Recordatorio',
      message: 'Su próximo pago está programado para mañana',
      time: '1 día',
      type: 'reminder'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-40 left-40 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-60 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-40 left-60 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center">
          <div>
            <h1 className="text-6xl font-black text-transparent bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text mb-4 tracking-tight">Dashboard</h1>
            <p className="text-2xl text-blue-200 font-light">Bienvenido de vuelta, <span className="text-amber-300 font-bold">Juan Pérez</span></p>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 text-sm font-medium">Estado: Activo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">Plan Premium</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-2xl font-medium text-white"
          >
            {showBalance ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
            <span>{showBalance ? 'Ocultar' : 'Mostrar'} Balance</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className={`group bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 hover:scale-110 hover:shadow-3xl transition-all duration-500 relative overflow-hidden cursor-pointer`}>
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent">
              <div 
                className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                {stat.changeType === 'positive' && (
                  <div className="flex items-center space-x-1 bg-emerald-100 px-3 py-1 rounded-full">
                    <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 text-sm font-bold">{stat.change}</span>
                  </div>
                )}
                {stat.changeType === 'negative' && (
                  <div className="flex items-center space-x-1 bg-red-100 px-3 py-1 rounded-full">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                    <span className="text-red-700 text-sm font-bold">{stat.change}</span>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700 font-semibold uppercase tracking-wide">{stat.title}</p>
                <p className="text-4xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">{stat.value}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">{stat.progress}% del objetivo</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Logros Desbloqueados</h2>
                <p className="text-blue-200">Tu progreso como inversor</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-amber-300">2/4</p>
              <p className="text-sm text-blue-200">Completados</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                achievement.unlocked 
                  ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 shadow-lg' 
                  : 'bg-white/5 border-white/10 opacity-60'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg' 
                    : 'bg-gray-600'
                }`}>
                  <achievement.icon className={`w-6 h-6 ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <h3 className={`font-bold text-sm ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}>
                  {achievement.title}
                </h3>
                {achievement.unlocked && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl mr-4 flex items-center justify-center shadow-lg">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span>Transacciones Recientes</span>
            </h2>
            <div className="space-y-6">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="group flex items-center justify-between p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl hover:shadow-xl hover:scale-[1.02] hover:bg-white/20 transition-all duration-300 border border-white/10">
                  <div className="flex items-center space-x-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      transaction.type === 'deposit' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white' :
                      transaction.type === 'investment' ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' :
                      'bg-gradient-to-br from-amber-500 to-amber-600 text-white'
                    }`}>
                      {transaction.type === 'deposit' ? <ArrowUpRight className="w-6 h-6" /> :
                       transaction.type === 'investment' ? <ArrowDownRight className="w-6 h-6" /> :
                       <Users className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{transaction.description}</p>
                      <p className="text-sm text-blue-200 font-medium">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-black text-xl ${
                      transaction.amount.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {showBalance ? transaction.amount : '••••••'}
                    </p>
                    <p className="text-sm text-blue-200 capitalize font-medium">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Acciones Rápidas
            </h2>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <button key={index} className={`w-full p-4 bg-gradient-to-r ${action.color} text-white rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 text-left group`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <action.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{action.title}</h3>
                      <p className="text-sm opacity-90">{action.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg mr-3 flex items-center justify-center">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <span>Notificaciones</span>
            </h2>
            <div className="space-y-6">
              {notifications.map((notification) => (
                <div key={notification.id} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    notification.type === 'success' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white' :
                    notification.type === 'info' ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' :
                    'bg-gradient-to-br from-amber-500 to-amber-600 text-white'
                  }`}>
                    <Bell className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white">{notification.title}</p>
                    <p className="text-sm text-blue-200 leading-relaxed">{notification.message}</p>
                    <p className="text-xs text-blue-300 mt-2 font-medium">Hace {notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
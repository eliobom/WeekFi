import React, { useState } from 'react';
import { TrendingUp, Shield, Users, Calculator, MessageCircle, Menu, X, Home, BarChart3, CreditCard, Settings, HelpCircle, LogOut } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import InvestmentCalculator from './components/InvestmentCalculator';
import InvestmentPlans from './components/InvestmentPlans';
import ReferralDashboard from './components/ReferralDashboard';
import AuthModal from './components/AuthModal';
import SupportChat from './components/SupportChat';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSupportChat, setShowSupportChat] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('landing');
  };

  const navigation = [
    { name: 'Dashboard', icon: Home, id: 'dashboard' },
    { name: 'Calculator', icon: Calculator, id: 'calculator' },
    { name: 'Plans', icon: BarChart3, id: 'plans' },
    { name: 'Referidos', icon: Users, id: 'referrals' },
    { name: 'Portfolio', icon: TrendingUp, id: 'portfolio' },
    { name: 'Payments', icon: CreditCard, id: 'payments' },
    { name: 'Settings', icon: Settings, id: 'settings' },
    { name: 'Help', icon: HelpCircle, id: 'help' },
  ];

  const renderContent = () => {
    if (!isAuthenticated && currentPage !== 'landing') {
      return <LandingPage onLogin={() => setShowAuthModal(true)} />;
    }

    switch (currentPage) {
      case 'landing':
        return <LandingPage onLogin={() => setShowAuthModal(true)} />;
      case 'dashboard':
        return <Dashboard />;
      case 'calculator':
        return <InvestmentCalculator />;
      case 'plans':
        return <InvestmentPlans />;
      case 'referrals':
        return <ReferralDashboard userId="current-user-id" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      {isAuthenticated && (
        <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-emerald-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent">
                  WeekFi
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-blue-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Support Chat Button */}
      <button
        onClick={() => setShowSupportChat(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-900 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Modals */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} onLogin={handleLogin} />
      )}
      
      {showSupportChat && (
        <SupportChat onClose={() => setShowSupportChat(false)} />
      )}
    </div>
  );
}

export default App;
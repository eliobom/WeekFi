import React from 'react';
import { TrendingUp, Shield, Users, Calculator, Star, CheckCircle, ArrowRight, Award, Globe, Lock } from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-20 right-40 w-1 h-1 bg-amber-300 rounded-full animate-ping delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8 animate-bounce">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/25 border border-amber-300/20">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-amber-200 to-emerald-200 bg-clip-text text-transparent tracking-tight animate-fade-in">
            WeekFi
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
              Multiplique su capital con inversiones inteligentes y seguras. 
              <span className="text-amber-300 font-semibold">Rendimientos garantizados</span> desde el primer día.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={onLogin}
                className="group bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 border border-amber-300/20 relative overflow-hidden"
              >
                <span className="relative z-10">Comenzar a Invertir</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 hover:scale-105 hover:border-white/50 transition-all duration-300 shadow-lg">
                Ver Planes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-emerald-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-3">$50M+</div>
              <div className="text-gray-600 font-medium">Capital Administrado</div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text mb-3">15,000+</div>
              <div className="text-gray-600 font-medium">Inversores Activos</div>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text mb-3">98.5%</div>
              <div className="text-gray-600 font-medium">Satisfacción del Cliente</div>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-3">24/7</div>
              <div className="text-gray-600 font-medium">Soporte Disponible</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-900 via-emerald-700 to-blue-900 bg-clip-text mb-6">¿Por qué elegir WeekFi?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos la plataforma de inversión más avanzada y segura del mercado
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 via-blue-700 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Seguridad Máxima</h3>
                <p className="text-gray-600 leading-relaxed">
                  Utilizamos tecnología de encriptación bancaria y seguros de inversión para proteger su capital.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Rendimientos Garantizados</h3>
                <p className="text-gray-600 leading-relaxed">
                  Obtenga retornos semanales y quincenales con tasas competitivas y transparentes.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Soporte Experto</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equipo de asesores financieros disponible 24/7 para guiarle en cada inversión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-emerald-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-900 via-amber-600 to-emerald-700 bg-clip-text mb-6">Planes de Inversión</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Elija el plan que mejor se adapte a sus objetivos</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-3xl border-2 border-blue-200/50 hover:border-blue-300 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-blue-900 mb-2">Plan Básico</h3>
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text mb-2">8%</div>
                  <div className="text-gray-600 font-medium">Rendimiento Semanal</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Inversión mínima: $100</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Pagos semanales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Soporte básico</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Seleccionar Plan
                </button>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-amber-50 via-white to-orange-100 p-8 rounded-3xl border-2 border-amber-300 hover:border-amber-400 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-3xl relative overflow-hidden transform scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                ⭐ Más Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 pt-4">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-amber-900 mb-2">Plan Premium</h3>
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text mb-2">12%</div>
                  <div className="text-gray-600 font-medium">Rendimiento Semanal</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Inversión mínima: $500</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Pagos semanales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Soporte prioritario</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Asesor personal</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Seleccionar Plan
                </button>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-50 via-white to-teal-100 p-8 rounded-3xl border-2 border-emerald-200/50 hover:border-emerald-300 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-emerald-900 mb-2">Plan Elite</h3>
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-2">15%</div>
                  <div className="text-gray-600 font-medium">Rendimiento Semanal</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Inversión mínima: $2,000</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Pagos semanales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Soporte VIP 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">Gerente de cuenta</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-4 rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-teal-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Seleccionar Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-emerald-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-900 via-emerald-700 to-blue-900 bg-clip-text mb-6">Certificaciones y Seguridad</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Respaldados por las principales instituciones financieras</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl text-center hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Certificación SEC</h3>
                <p className="text-gray-600 leading-relaxed">Regulados por la Comisión de Valores y Bolsa</p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl text-center hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Seguro SIPC</h3>
                <p className="text-gray-600 leading-relaxed">Protección de hasta $500,000 por cuenta</p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl text-center hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Licencia Global</h3>
                <p className="text-gray-600 leading-relaxed">Operaciones en 50+ países</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-emerald-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-900 via-emerald-700 to-blue-900 bg-clip-text mb-6">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Testimonios reales de inversores satisfechos</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-3xl hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border border-blue-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "En 6 meses he triplicado mi inversión inicial. El soporte es excepcional y los pagos siempre llegan a tiempo."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">MR</span>
                  </div>
                  <div>
                    <div className="font-bold text-blue-900 text-lg">María Rodríguez</div>
                    <div className="text-gray-600 font-medium">Inversora Premium</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-8 rounded-3xl hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border border-emerald-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "La plataforma es muy intuitiva y la transparencia en los reportes me da total confianza."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">JL</span>
                  </div>
                  <div>
                    <div className="font-bold text-emerald-900 text-lg">Juan López</div>
                    <div className="text-gray-600 font-medium">Inversor Elite</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-amber-50 via-white to-orange-100 p-8 rounded-3xl hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border border-amber-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "Comencé con el plan básico y ya estoy viendo excelentes resultados. Totalmente recomendado."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">AS</span>
                  </div>
                  <div>
                    <div className="font-bold text-amber-900 text-lg">Ana Silva</div>
                    <div className="text-gray-600 font-medium">Inversora Básica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-amber-200 to-emerald-200 bg-clip-text text-transparent">¿Listo para hacer crecer su dinero?</h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-200 leading-relaxed">
            Únase a miles de inversores que ya están generando ingresos pasivos con WeekFi
          </p>
          <button
            onClick={onLogin}
            className="group bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 shadow-xl inline-flex items-center space-x-3 border border-amber-300/20 relative overflow-hidden"
          >
            <span className="relative z-10">Comenzar Ahora</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
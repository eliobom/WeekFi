import React from 'react';
import { CheckCircle, Star, TrendingUp, Users, Shield, Clock } from 'lucide-react';

const InvestmentPlans = () => {
  const plans = [
    {
      id: 'basic',
      name: 'Plan Básico',
      rate: '8%',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      features: [
        'Inversión mínima: $100',
        'Rendimiento semanal del 8%',
        'Pagos automáticos',
        'Soporte por email',
        'Dashboard básico',
        'Historial de transacciones'
      ],
      benefits: [
        'Perfecto para principiantes',
        'Bajo riesgo',
        'Liquidez semanal'
      ]
    },
    {
      id: 'premium',
      name: 'Plan Premium',
      rate: '12%',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-100',
      borderColor: 'border-amber-400',
      textColor: 'text-amber-900',
      popular: true,
      features: [
        'Inversión mínima: $500',
        'Rendimiento semanal del 12%',
        'Pagos automáticos',
        'Soporte prioritario',
        'Dashboard avanzado',
        'Asesor personal asignado',
        'Reportes detallados',
        'Programa de referidos'
      ],
      benefits: [
        'Mejor relación riesgo-rendimiento',
        'Soporte especializado',
        'Herramientas avanzadas'
      ]
    },
    {
      id: 'elite',
      name: 'Plan Elite',
      rate: '15%',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-teal-100',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-900',
      features: [
        'Inversión mínima: $2,000',
        'Rendimiento semanal del 15%',
        'Pagos automáticos',
        'Soporte VIP 24/7',
        'Dashboard ejecutivo',
        'Gerente de cuenta dedicado',
        'Análisis de mercado exclusivo',
        'Acceso a inversiones especiales',
        'Programa de fidelización VIP'
      ],
      benefits: [
        'Máximo rendimiento',
        'Servicio personalizado',
        'Acceso exclusivo a oportunidades'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      plan: 'Plan Premium',
      avatar: 'CM',
      comment: 'Llevo 8 meses con el plan premium y los resultados han superado mis expectativas. El soporte es excelente.',
      rating: 5
    },
    {
      name: 'Laura Vega',
      plan: 'Plan Elite',
      avatar: 'LV',
      comment: 'El servicio VIP y el gerente de cuenta hacen toda la diferencia. Muy recomendado para inversiones serias.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      plan: 'Plan Básico',
      avatar: 'RS',
      comment: 'Perfecto para comenzar. Empecé con el plan básico y ya estoy considerando upgradear al premium.',
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Planes de Inversión</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Elija el plan que mejor se adapte a sus objetivos financieros y comience a generar ingresos pasivos hoy mismo
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-gradient-to-br ${plan.bgColor} rounded-2xl border-2 ${plan.borderColor} p-8 relative hover:shadow-xl transition-all duration-300 ${
              plan.popular ? 'scale-105 shadow-xl' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 inline mr-1" />
                Más Popular
              </div>
            )}
            
            <div className="text-center mb-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>{plan.name}</h3>
              <div className={`text-5xl font-bold ${plan.textColor} mb-2`}>{plan.rate}</div>
              <div className="text-gray-600">Rendimiento Semanal</div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className={`font-semibold ${plan.textColor} mb-3`}>Características:</h4>
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className={`font-semibold ${plan.textColor} mb-3`}>Beneficios:</h4>
              <div className="space-y-2">
                {plan.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity`}>
              Seleccionar Plan
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-16">
        <div className="px-6 py-4 bg-gradient-to-r from-blue-900 to-emerald-600">
          <h2 className="text-2xl font-bold text-white">Comparación de Planes</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Características
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Básico
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Premium
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Elite
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Inversión Mínima
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">$100</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">$500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">$2,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Rendimiento Semanal
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">8%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">12%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">15%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Soporte
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">Email</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">Prioritario</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">VIP 24/7</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Asesor Personal
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Análisis de Mercado
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">Básico</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">Exclusivo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Lo que dicen nuestros inversores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.plan}</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-2xl text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="text-xl mb-6 text-blue-100">
          Únase a miles de inversores que ya están generando ingresos pasivos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Hablar con un Asesor
          </button>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
            Comenzar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;
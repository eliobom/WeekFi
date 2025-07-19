import React, { useState } from 'react';
import { X, Send, MessageCircle, User, Clock, CheckCircle } from 'lucide-react';

interface SupportChatProps {
  onClose: () => void;
}

const SupportChat: React.FC<SupportChatProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'support',
      content: '¡Hola! Soy Sofia, su asistente de inversiones. ¿En qué puedo ayudarle hoy?',
      timestamp: new Date(Date.now() - 5000),
      status: 'delivered'
    },
    {
      id: 2,
      sender: 'support',
      content: 'Estoy aquí para ayudarle con cualquier pregunta sobre nuestros planes de inversión, pagos, o cualquier otro tema.',
      timestamp: new Date(Date.now() - 3000),
      status: 'delivered'
    }
  ]);

  const quickResponses = [
    'Información sobre planes',
    'Estado de mi inversión',
    'Próximos pagos',
    'Cómo retirar fondos',
    'Programa de referidos'
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: message,
        timestamp: new Date(),
        status: 'delivered'
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: messages.length + 2,
          sender: 'support',
          content: 'Gracias por su mensaje. Un especialista se pondrá en contacto con usted en breve para ayudarle con su consulta.',
          timestamp: new Date(),
          status: 'delivered'
        };
        setMessages(prev => [...prev, supportResponse]);
      }, 1000);
    }
  };

  const handleQuickResponse = (text: string) => {
    setMessage(text);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-end z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md h-[600px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Soporte WeekFi</h3>
                <p className="text-sm text-blue-100">En línea • Respuesta inmediata</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-900 to-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <div className={`flex items-center justify-end mt-1 space-x-1 ${
                  msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  <span className="text-xs">{formatTime(msg.timestamp)}</span>
                  {msg.sender === 'user' && (
                    <CheckCircle className="w-3 h-3" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Responses */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Respuestas rápidas:</p>
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => handleQuickResponse(response)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escriba su mensaje..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;
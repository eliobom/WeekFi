import React, { useState, useEffect } from 'react';
import { Gift, CheckCircle, AlertCircle } from 'lucide-react';
import { validateReferralCode } from '../utils/referralSystem';

interface ReferralRegistrationProps {
  onReferralCodeChange: (code: string, isValid: boolean) => void;
}

const ReferralRegistration: React.FC<ReferralRegistrationProps> = ({ onReferralCodeChange }) => {
  const [referralCode, setReferralCode] = useState('');
  const [isValidCode, setIsValidCode] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // Verificar si hay código en URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    
    if (refCode) {
      setReferralCode(refCode);
      validateCode(refCode);
    }
  }, []);

  const validateCode = async (code: string) => {
    if (!code) {
      setIsValidCode(null);
      onReferralCodeChange('', false);
      return;
    }

    setIsChecking(true);
    
    // Simular validación de API
    setTimeout(() => {
      const isValid = validateReferralCode(code);
      setIsValidCode(isValid);
      onReferralCodeChange(code, isValid);
      setIsChecking(false);
    }, 500);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.toUpperCase();
    setReferralCode(code);
    validateCode(code);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Código de Referido (Opcional)
      </label>
      <div className="relative">
        <div className="absolute left-3 top-3 w-5 h-5 text-gray-400">
          <Gift className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={referralCode}
          onChange={handleCodeChange}
          className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors ${
            isValidCode === null 
              ? 'border-gray-300' 
              : isValidCode 
              ? 'border-emerald-500 bg-emerald-50' 
              : 'border-red-500 bg-red-50'
          }`}
          placeholder="REF123456789"
          maxLength={16}
        />
        
        {/* Status Icon */}
        <div className="absolute right-3 top-3">
          {isChecking ? (
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          ) : isValidCode === true ? (
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          ) : isValidCode === false ? (
            <AlertCircle className="w-5 h-5 text-red-500" />
          ) : null}
        </div>
      </div>
      
      {/* Status Messages */}
      {isValidCode === true && (
        <div className="mt-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <p className="text-sm text-emerald-700 font-medium">
              ¡Código válido! Recibirás beneficios especiales al registrarte.
            </p>
          </div>
        </div>
      )}
      
      {isValidCode === false && (
        <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <p className="text-sm text-red-700 font-medium">
              Código de referido inválido. Verifica que esté escrito correctamente.
            </p>
          </div>
        </div>
      )}
      
      {referralCode && isValidCode === null && !isChecking && (
        <p className="mt-1 text-sm text-gray-500">
          Ingresa un código de referido para obtener beneficios especiales
        </p>
      )}
    </div>
  );
};

export default ReferralRegistration;
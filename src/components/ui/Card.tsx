import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'glass';
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className = ''
}) => {
  const baseClasses = 'rounded-3xl transition-all duration-500';
  
  const variantClasses = {
    default: 'bg-white shadow-lg border border-gray-200',
    premium: 'card-premium',
    glass: 'glass shadow-xl'
  };
  
  const hoverClasses = hover ? 'card-hover' : '';
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${hoverClasses}
    ${className}
  `.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
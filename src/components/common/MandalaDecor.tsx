import React from 'react';

export const SacredDiyaIcon: React.FC<{ className?: string; glow?: boolean }> = ({ 
  className = "w-6 h-6", 
  glow = true 
}) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} ${glow ? 'diya-glow' : ''}`}
  >
    {/* Diya Base */}
    <path 
      d="M8 26C8 35 15 42 24 42C33 42 40 35 40 26C40 24 35 24 24 24C13 24 8 24 8 26Z" 
      fill="#C6A15B" 
      stroke="#8A6234" 
      strokeWidth="1.5"
    />
    <path 
      d="M11 26C14 28 20 29 24 29C28 29 34 28 37 26" 
      stroke="#FFF9F0" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      opacity="0.8"
    />
    {/* Flame Outer */}
    <path 
      d="M24 6C24 6 18 15 18 20C18 23.3 20.7 26 24 26C27.3 26 30 23.3 30 20C30 15 24 6 24 6Z" 
      fill="#E99A24"
    />
    {/* Flame Inner Core */}
    <path 
      d="M24 13C24 13 20.5 17.5 20.5 20.5C20.5 22.4 22.1 24 24 24C25.9 24 27.5 22.4 27.5 20.5C27.5 17.5 24 13 24 13Z" 
      fill="#FFF9F0"
    />
  </svg>
);

export const KalashEmblem: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coconut Top */}
    <circle cx="32" cy="18" r="8" fill="#844418" />
    <path d="M26 18C28 12 36 12 38 18" stroke="#E99A24" strokeWidth="1.5" />
    {/* Mango Leaves */}
    <path d="M22 22C16 16 12 24 22 27" fill="#2E7D32" />
    <path d="M42 22C48 16 52 24 42 27" fill="#2E7D32" />
    <path d="M32 18C30 10 34 10 32 18" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
    {/* Kalash Pot */}
    <path d="M20 28H44L47 38C48 45 42 54 32 54C22 54 16 45 17 38L20 28Z" fill="#C6A15B" stroke="#641D32" strokeWidth="2" />
    {/* Sacred Swastika / Red Ribbon on Pot */}
    <rect x="18" y="27" width="28" height="4" fill="#641D32" />
    <circle cx="32" cy="41" r="5" fill="#641D32" />
    <circle cx="32" cy="41" r="2.5" fill="#E99A24" />
  </svg>
);

export const VedicBorderPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`h-1.5 w-full bg-gradient-to-r from-maroon-800 via-gold-500 to-saffron-500 ${className}`} />
);

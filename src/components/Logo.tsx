import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = '', size = 80, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/src/assets/images/rafa_freitas_logo_1784373239161.jpg"
        alt="Rafa Freitas Logotipo"
        style={{ height: `${size}px`, width: 'auto' }}
        referrerPolicy="no-referrer"
        className="object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

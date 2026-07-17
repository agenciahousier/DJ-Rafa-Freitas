import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = '', size = 80, showText = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Dynamic SVG for the RF Monogram */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white hover:text-brand-red transition-colors duration-300"
      >
        {/* Outer RF geometric outline - double stroke */}
        <path
          d="M20 20 H55 C65 20 72 27 72 37 C72 47 65 54 55 54 H35 V80"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 28 H55 C60 28 64 32 64 37 C64 42 60 46 55 46 H35 V80"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
        
        {/* The 'F' arms fusing with the 'R' structure */}
        <path
          d="M35 46 H68"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M35 54 H62"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M35 64 H55"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Slanted R leg */}
        <path
          d="M52 54 L75 80"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M47 54 L68 80"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>

      {showText && (
        <div className="mt-3 text-center">
          <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.3em] text-white uppercase glow-red-text">
            Rafa Freitas
          </span>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useAnimation } from '../hooks/useAnimation';

const Hero: React.FC = () => {
  const { animated } = useAnimation();

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-8">
      <div className="relative z-10 flex flex-col items-start">
        <h1 
          className={`text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight font-serif ${
            animated ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '300ms' }}
        >
          Elm Labs
        </h1>
        <div 
          className={`h-0.5 bg-emerald-500 mb-6 ${
            animated ? 'animate-width-expand' : 'w-0'
          }`}
          style={{ animationDelay: '600ms' }}
        />
        <p 
          className={`text-2xl md:text-3xl font-semibold text-emerald-600 font-serif ${
            animated ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '900ms' }}
        >
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default Hero;
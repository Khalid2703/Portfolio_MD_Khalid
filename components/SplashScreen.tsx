import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

interface SplashScreenProps {
  onFinished: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinished, 200); // slight pause at 100
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-white">
      <div className="flex flex-col items-center space-y-6 max-w-sm w-full px-6">
        {/* Animated Cpu */}
        <div className="p-4 rounded-full bg-accent-teal/5 border border-accent-teal/20 animate-pulse">
          <Cpu className="text-accent-teal h-10 w-10 animate-spin-slow" />
        </div>

        {/* Progress labels */}
        <div className="text-center w-full">
          <h2 className="font-mono text-sm tracking-widest text-text-light uppercase font-bold">
            COMPILING AGENT STATES
          </h2>
          <p className="text-[10px] font-mono text-gray-500 mt-1 select-none">
            Initializing stategraph, nodes and evaluation tensors...
          </p>
        </div>

        {/* Custom Progress Bar */}
        <div className="w-full bg-white/5 border border-dark-border/60 h-2 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-accent-indigo to-accent-teal transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Percent readout */}
        <span className="font-mono text-xs text-accent-teal font-extrabold">
          {percent}%
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;

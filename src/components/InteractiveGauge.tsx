import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import backgroundImage from '@/assets/background-interactive.png';
import socketOverlay from '@/assets/socket-overlay.svg';

export const InteractiveGauge: React.FC = () => {
  const [gaugeValue, setGaugeValue] = useState(0);
  const maxValue = 100;
  const isMaxValue = gaugeValue >= maxValue;

  const incrementGauge = () => {
    setGaugeValue(prev => Math.min(prev + 10, maxValue));
  };

  const resetGauge = () => {
    setGaugeValue(0);
  };

  // Calculate color based on gauge value
  const getGaugeColor = (value: number): string => {
    if (value <= 33) return 'hsl(var(--gauge-start))'; // Green
    if (value <= 66) return 'hsl(var(--gauge-middle))'; // Yellow/Orange
    return 'hsl(var(--gauge-end))'; // Red
  };

  const currentColor = getGaugeColor(gaugeValue);
  const gaugeHeight = (gaugeValue / maxValue) * 100;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* SVG Overlay on Background Wrench */}
      <div className="absolute inset-0 z-5 flex items-center justify-center">
        <div className="relative">
          {/* Socket SVG with dynamic tint - positioned over the wrench in background */}
          <div 
            className="transition-all duration-500"
            style={{
              filter: `hue-rotate(${gaugeValue * 1.2}deg) saturate(${1 + (gaugeValue / 100)}) brightness(${1 + (gaugeValue / 200)})`
            }}
          >
            <img 
              src={socketOverlay} 
              alt="Socket tool overlay"
              className="w-32 h-auto drop-shadow-2xl"
              style={{
                filter: `drop-shadow(0 0 15px ${currentColor}80)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-8 py-12">
        
        {/* Right side - Gauge */}
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-3xl font-bold text-white mb-4">Torque Monitor</h1>
          
          {/* Vertical Gauge */}
          <div className="relative">
            {/* Gauge Container */}
            <div className="w-8 h-64 bg-surface/60 rounded-full border border-outline backdrop-blur-sm">
              {/* Gauge Fill */}
              <div 
                className="absolute bottom-0 w-full rounded-full transition-all duration-500 ease-out"
                style={{
                  height: `${gaugeHeight}%`,
                  backgroundColor: currentColor,
                  boxShadow: `0 0 20px ${currentColor}40`
                }}
              />
            </div>
            
            {/* Gauge Labels */}
            <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-white/80 text-sm">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
          </div>

          {/* Gauge Value Display */}
          <div className="text-center space-y-2">
            <div 
              className="text-4xl font-mono font-bold transition-colors duration-300"
              style={{ color: currentColor }}
            >
              {gaugeValue}%
            </div>
            <div className="text-white/70 text-sm">Current Torque</div>
          </div>

          {/* Control Buttons */}
          <div className="flex space-x-3">
            <Button
              onClick={incrementGauge}
              disabled={isMaxValue}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-6"
            >
              Increase Torque
            </Button>
            <Button
              onClick={resetGauge}
              variant="secondary"
              className="bg-surface/80 hover:bg-surface border border-outline backdrop-blur-sm"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Break Warning Overlay */}
      {isMaxValue && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-red-900/80 backdrop-blur-sm">
          <div className="text-center space-y-6 animate-pulse">
            <div 
              className="text-8xl font-black text-red-500"
              style={{ 
                textShadow: '0 0 30px hsl(var(--gauge-end)), 0 0 60px hsl(var(--gauge-end))',
                filter: 'drop-shadow(0 0 20px hsl(var(--gauge-end)))'
              }}
            >
              BREAK
            </div>
            <p className="text-xl text-white/90 font-semibold">Maximum torque reached!</p>
            <Button 
              onClick={resetGauge}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-lg"
            >
              Reset System
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="absolute top-4 left-4 z-20">
        <Button 
          variant="secondary" 
          size="sm"
          onClick={() => window.history.back()}
          className="bg-surface/80 hover:bg-surface border border-outline backdrop-blur-sm"
        >
          ← Back to Scanner
        </Button>
      </div>
    </div>
  );
};
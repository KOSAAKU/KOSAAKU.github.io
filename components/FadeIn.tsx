import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  yOffset?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  threshold = 0.1,
  yOffset = 20
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold });

  // Convert delay number to a style object to allow precise control
  const style = {
    transitionDelay: `${delay}ms`,
    '--y-offset': `${yOffset}px`,
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-[var(--y-offset)] blur-[2px]'
      } ${className}`}
    >
      {children}
    </div>
  );
};
"use client";

import { useTheme } from "next-themes";
import { Darker_Grotesque } from "next/font/google";

interface EnhancedGridProps {
  className?: string;
  size?: number
}

const EnhancedGrid: React.FC<EnhancedGridProps> = ({ className = "", size=40 }) => {

  const {theme} = useTheme()

  return (
    <div className={`fixed h-[300vh] inset-0  -z-10 overflow-hidden ${className}`}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${theme === 'dark' ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'dark' ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}  1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px `,
        }}
      />
      
      {/* Gradient overlay for fade effect */}
      <div
        className="absolute inset-0"
        style={{
          background:  `radial-gradient(circle at 50% 50%, transparent 0%, ${theme === 'dark' ? "rgba(0, 6, 15, 0.8)" : "rgba(255, 255, 240, 0.8)"} 100%)
          `,
        }}
      />
    </div>
  );
};

export default EnhancedGrid;
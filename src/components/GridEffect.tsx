"use client";

interface EnhancedGridProps {
  className?: string;
  size?: number
}

const EnhancedGrid: React.FC<EnhancedGridProps> = ({ className = "", size=40 }) => {
  return (
    <div className={`fixed h-[300vh] inset-0  -z-10 overflow-hidden ${className}`}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px `,
        }}
      />
      
      {/* Gradient overlay for fade effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 6, 15, 0.8) 100%)
          `,
        }}
      />
    </div>
  );
};

export default EnhancedGrid;
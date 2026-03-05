import { ReactNode } from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ 
  className = '', 
  variant = 'rectangular', 
  width, 
  height 
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style: React.CSSProperties = {
    width: width || '100%',
    height: height || '1rem',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <Skeleton height="1.5rem" width="60%" className="mb-4" />
      <Skeleton height="1rem" className="mb-2" />
      <Skeleton height="1rem" width="80%" className="mb-2" />
      <Skeleton height="1rem" width="40%" />
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <Skeleton height="1.5rem" width="50%" className="mb-4" />
      <Skeleton height="200px" />
    </div>
  );
}

export function ListSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1">
            <Skeleton height="1rem" width="70%" className="mb-1" />
            <Skeleton height="0.75rem" width="40%" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm overflow-hidden">
      <Skeleton height="2rem" width="30%" className="mb-4" />
      <div className="space-y-2">
        <div className="flex gap-2">
          {Array.from({ length: cols }).map((_, i) => (
            <Skeleton key={i} height="2.5rem" className="flex-1" />
          ))}
        </div>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {Array.from({ length: cols }).map((_, colIndex) => (
              <Skeleton key={colIndex} height="2rem" className="flex-1" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

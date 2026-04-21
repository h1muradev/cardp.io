import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

export function Card({ children, className = '', noPadding, ...props }: CardProps) {
  return (
    <div
      className={`bg-white border border-[#E2E8F0] rounded-xl shadow-sm ${
        noPadding ? '' : 'p-6'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

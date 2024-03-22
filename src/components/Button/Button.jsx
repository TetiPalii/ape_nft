'use client';

import { cn } from '@/assets/utils/cn';

export const Button = ({ children, className, setMenuOpen }) => {
  return (
    <button
      onClick={() => {
        setMenuOpen();
      }}
      type="button"
      className={cn(
        'uppercase focus:text-white hover:text-white font-["Right_Grotesk_Compact_Black"] rounded-lg  transition-colors',
        className,
      )}
    >
      {children}
    </button>
  );
};

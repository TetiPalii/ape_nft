import { cn } from '@/assets/utils/cn';

export const SectionTitle = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'uppercase font-black font-RightGrotesk text-[44px] text-center leading-[0.909] mb-6',
        className,
      )}
    >
      {children}
    </h2>
  );
};

import { cn } from '@/assets/utils/cn';

export const FaqTitle = ({ children, className }) => {
  return (
    <h3
      className={cn(
        'text-xl leading-none font-black font-RightGrotesk',
        className,
      )}
    >
      {children}
    </h3>
  );
};

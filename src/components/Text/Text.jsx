import { cn } from '@/assets/utils/cn';

export const Text = ({ children, className }) => {
  return (
    <p className={cn('uppercase text-xs leading-[1.1666]', className)}>
      {children}
    </p>
  );
};

import { cn } from '@/assets/utils/cn';

export const Text = ({ children, className }) => {
  return (
    <p
      className={cn(
        'uppercase text-xs leading-[1.1666] md:text-base xl:leadiing-[1.187] ',
        className,
      )}
    >
      {children}
    </p>
  );
};

import { cn } from '@/assets/utils/cn';

export const Slogan = ({ children, className }) => {
  return (
    <p
      className={cn(
        'font-BiroScript leading-relaxed text-base text-center md:text-xl md:leading-[1.65] xl:text-2xl xl:leading-[1.666]',
        className,
      )}
    >
      {children}
    </p>
  );
};

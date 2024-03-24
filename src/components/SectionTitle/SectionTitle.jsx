import { cn } from '@/assets/utils/cn';

export const SectionTitle = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'uppercase font-black font-["Right_Grotesk_Compact_Black"] text-[44px] text-center leading-[0.909] mb-6 md:text-[80px] md:mb-[48px] xl:mb-[80px]xl:text-[160px]',
        className,
      )}
    >
      {children}
    </h2>
  );
};

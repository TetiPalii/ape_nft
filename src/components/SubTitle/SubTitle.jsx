import { cn } from '@/assets/utils/cn';

export const SubTitle = ({ children, className }) => {
  return (
    <h3
      className={cn(
        'text-xl leading-none font-black font-["Right_Grotesk_Compact_Black"] md:text-[32px] xl:text-[64px] mb-[10px]',
        className,
      )}
    >
      {children}
    </h3>
  );
};

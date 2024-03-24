import { cn } from '@/assets/utils/cn';

export const MindMapCard = ({ mindMap, className }) => {
  return (
    <>
      {mindMap.map(({ description, title, id }) => (
        <div
          key={id}
          className={cn(
            'bg-secondaryTextColor flex flex-col items-center px-6 py-3 rounded-xl',
          )}
        >
          <p
            className={cn(
              'uppercase text-xs text-left leading-[1.1666] mb-[78px]',
              className,
            )}
          >
            {description}
          </p>{' '}
          <h2
            className={cn(
              'text-[32px] font-black font-RightGrotesk',
              className,
            )}
          >
            {title}
          </h2>
        </div>
      ))}
    </>
  );
};

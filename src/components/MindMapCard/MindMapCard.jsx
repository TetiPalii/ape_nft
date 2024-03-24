import { cn } from '@/assets/utils/cn';
import { Text } from '../Text/Text';
import { nanoid } from 'nanoid';

export const MindMapCard = ({ mindMap, className }) => {
  const id = () => nanoid(4);
  return (
    <>
      {mindMap.map(({ description, title }) => (
        <div
          key={id()}
          className={cn(
            'bg-secondaryTextColor flex flex-col items-center px-6 py-3 rounded-xl',
          )}
        >
          <Text
            className={cn(
              'uppercase text-xs text-left leading-[1.1666] mb-[78px]',
              className,
            )}
          >
            {description}
          </Text>
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

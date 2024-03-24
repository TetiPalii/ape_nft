'use client';

import { useState } from 'react';
import { FaqTitle } from '../FaqTitle/FaqTitle';
import { Text } from '../Text/Text';
import { cn } from '@/assets/utils/cn';

export const FaqItem = ({ item, itemNumber, isOpen, onClick }) => {
  //   const [isActive, setIsActive] = useState(false);

  //   const handleClick = () => {
  //     setIsActive(!isActive);
  //   };

  return (
    <li
      onClick={onClick}
      className={cn(
        'rounded-xl p-2 min-w-[216px] md:w-[592px] md:py-[18px] xl:w-[1032px] md:relative transition-[bg] md:h-[159px] xl:h-[250px]',
        isOpen && 'bg-secondaryTextColor',
      )}
    >
      <div className="flex items-baseline gap-x-3 md:items-center md:justify-end ">
        {/* image */}
        {isOpen && (
          <div className="hidden md:block md:absolute left-[15px] md:bottom-[-12px] z-10 w-[148px] h-[183px] rounded-2xl bg-white -rotate-12 xl:w-[248px] xl:h-[282px]">
            {/* <Image  width={148} height={183} /> */}
          </div>
        )}
        <div>
          <p
            className={cn(
              "font-['Biro_Script_Plus_Bold_US'] tracking-[8px]",
              isOpen && 'text-accentColor',
            )}
          >
            {`[${itemNumber + 1}]`}
          </p>
        </div>

        {/* question+answer */}
        <div className="flex flex-col gap-y-3 items-center min-w-[169px] md:w-[339px]">
          <FaqTitle
            className={cn(
              'hover:text-accentColor',
              isOpen && 'text-accentColor',
            )}
          >
            {item.question}
          </FaqTitle>
          {isOpen && <Text>{item.answer}</Text>}
        </div>
      </div>
    </li>
  );
};

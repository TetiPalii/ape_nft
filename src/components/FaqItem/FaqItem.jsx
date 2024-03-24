'use client';

import { useState } from 'react';
import { SubTitle } from '../SubTitle/SubTitle';
import { Text } from '../Text/Text';
import { cn } from '@/assets/utils/cn';

export const FaqItem = ({ item, itemNumber, isOpen, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={cn(
        'rounded-xl p-2 cursor-pointer md:pt-[18px] md:pb-[23px] md:pl-[183px] md:pr-4 md:relative transition-[bg] xl:py-6 xl:pr-6 xl:pl-[373px]',
        isOpen && 'bg-secondaryTextColor',
      )}
    >
      {/* image */}
      {isOpen && (
        <div
          className="hidden md:block md:absolute md:left-[19px] md:top-[50%]
        md:translate-y-[-50%] md:-rotate-[16deg] z-10 w-[148px] h-[183px] rounded-2xl bg-white xl:min-w-[248px] xl:h-[282px] xl:bottom-0 xl:left-[19px] xl:-rotate-[8deg]"
        >
          {/* <Image  width={148} height={183} /> */}
        </div>
      )}
      <div className="flex items-center gap-x-2">
        <p
          className={cn(
            "font-['Biro_Script_Plus_Bold_US'] tracking-[8px] md:text-base leadiing-[1.69] xl:text-2xl xl:leading-[1.66]",
            isOpen && 'text-accentColor',
          )}
        >
          {`[${itemNumber + 1}]`}
        </p>

        {/* question+answer */}
        <div>
          <SubTitle
            className={cn(
              'hover:text-accentColor',
              isOpen && 'text-accentColor',
            )}
          >
            {item.question}
          </SubTitle>
          {isOpen && <Text>{item.answer}</Text>}
        </div>
      </div>
    </li>
  );
};

//1 <div className="flex items-baseline gap-x-3 md:items-center md:justify-end ">
//2  <div className="flex flex-col gap-y-3 items-center min-w-[169px] md:w-[339px] xl:w-[635px] xl:gap-y-9">

'use client';

import { useState } from 'react';
import { FaqTitle } from '../FaqTitle/FaqTitle';
import { Text } from '../Text/Text';

export const FaqItem = ({ item, itemNumber, isOpen, onClick }) => {
  //   const [isActive, setIsActive] = useState(false);

  //   const handleClick = () => {
  //     setIsActive(!isActive);
  //   };

  return (
    <li
      onClick={onClick}
      className="bg-secondaryTextColor rounded-xl p-2 md:py-[18px] "
    >
      <div className="flex items-baseline gap-x-3 md:items-center">
        {/* image */}
        {isOpen && (
          <div className="hidden md:block w-[148px] h-[183px] rounded-2xl bg-white -rotate-12">
            {/* <Image  width={148} height={183} /> */}
          </div>
        )}
        <div>
          <p
            className={
              isOpen
                ? "font-['Biro_Script_Plus_Bold_US'] "
                : "font-['Biro_Script_Plus_Bold_US'] text-accentColor"
            }
          >
            {`[${itemNumber + 1}]`}{' '}
          </p>
        </div>

        {/* question+answer */}
        <div className="flex flex-col gap-y-3 items-center">
          <FaqTitle className={'hover:text-accentColor'}>
            {item.question}
          </FaqTitle>
          {isOpen && (
            <div className="flex items-center">
              <Text>{item.answer}</Text>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

'use client';

import { nanoid } from 'nanoid';
import { FaqItem } from '../FaqItem/FaqItem';
import { useState } from 'react';

export const FaqList = ({ faqData }) => {
  const [openDropdownId, setOpenDropdownId] = useState(0);

  const id = () => nanoid();

  const handleDropdownClick = id => {
    setOpenDropdownId(prevId => (prevId === id ? null : id));
  };

  return (
    <ul className="flex flex-col gap-y-[18px] items-center ">
      {faqData.map((item, idx) => {
        return (
          <FaqItem
            isOpen={openDropdownId === idx}
            onClick={() => handleDropdownClick(idx)}
            key={id()}
            item={item}
            itemNumber={idx}
          />
        );
      })}
    </ul>
  );
};

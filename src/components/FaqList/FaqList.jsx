'use client';

import { nanoid } from 'nanoid';
import { FaqItem } from '../FaqItem/FaqItem';
import { useState } from 'react';

export const FaqList = ({ faqData }) => {
  const [openDropdownId, setOpenDropdownId] = useState(0);

  const id = () => nanoid();

  const handleDropdownClick = id => {
    setOpenDropdownId(prevId => {
      console.log('prev', prevId);
      console.log(id);
      return prevId === id ? false : id;
    });
  };

  return (
    <ul>
      {faqData.map((item, idx) => {
        return (
          <FaqItem
            isOpen={openDropdownId === idx}
            onClick={() => {
              console.log('item', idx);
              handleDropdownClick(idx);
            }}
            key={id()}
            item={item}
            itemNumber={idx}
          />
        );
      })}
    </ul>
  );
};

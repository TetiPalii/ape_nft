'use client';

import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { Button } from '@/components/Button/Button';
import { Logo } from '@/components/Logo/Logo';
import { socialMedia } from '@/data/icons/socialMedia';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=" w-full  px-4 fixed z-50">
      <nav className="flex items-start justify-between">
        <Logo />
        <div className="flex flex-col items-center gap-2">
          <Button
            setMenuOpen={() => {
              setMenuOpen(true);
            }}
            className={
              'px-2 py-[17px] bg-[#1E1E1E1A]  text-secondaryTextColor text-sm leading-[1.16] font-semibold'
            }
          >
            MENU
          </Button>
          <ul className="w-full flex flex-col gap-2">
            {socialMedia.map(({ id, icon }) => {
              return (
                <li
                  key={id}
                  className="px-2 py-[17px] rounded-xl bg-[#1E1E1E1A] text-sm leading-[1.16] font-semibold flex justify-center"
                >
                  <Link href={'/'}>{icon}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

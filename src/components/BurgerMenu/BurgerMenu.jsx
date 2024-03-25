'use client';
import { socialMediaWhite } from '@/data/icons/socialMedia';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import Link from 'next/link';

export const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  // console.log('burger');
  return (
    <div
      className={
        menuOpen
          ? 'top-0 left-0 fixed  bg-[#181818] w-screen h-screen ease-in duration-500 overflow-auto'
          : 'fixed left-[-200%] top-0 ease-in duration-500 md:hidden'
      }
    >
      <nav className="pt-[60px] px-4 flex items-start justify-between">
        <Logo fill="#fff" />
        <div className="flex flex-col gap-y-4">
          <Button
            setMenuOpen={() => {
              setMenuOpen(false);
            }}
            className={
              'px-2 py-[17px] rounded-xl bg-[#1E1E1E1A] text-sm leading-[1.16] font-semibold'
            }
          >
            CLOSE
          </Button>
          <ul className="w-full flex flex-col gap-2">
            {socialMediaWhite.map(({ id, icon }) => {
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
    </div>
  );
};

'use client';
import { Button } from '../Button/Button';

export const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  console.log('burger');
  return (
    <nav>
      <div
        className={
          menuOpen
            ? 'md:hidden top-0 left-0 fixed  bg-[#181818] w-screen h-screen ease-in duration-500 overflow-auto'
            : 'fixed left-[-200%] top-0 ease-in duration-500 md:hidden'
        }
      >
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
      </div>
    </nav>
  );
};

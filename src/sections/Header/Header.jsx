'use client';

import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { Button } from '@/components/Button/Button';
import { Logo } from '@/components/Logo/Logo';
import { Navigation } from '@/components/Navigation/Navigation';
import { socialMedia } from '@/data/icons/socialMedia';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=" w-full  px-4 fixed z-50">
      <Navigation setMenuOpen={setMenuOpen} />
      <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

import { socialMediaDark } from '@/data/icons/socialMedia';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import Link from 'next/link';

export const Navigation = ({ setMenuOpen }) => {
  return (
    <nav className="flex items-start justify-between">
      <Logo fill="#1E1E1E" />
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
          {socialMediaDark.map(({ id, icon }) => {
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
  );
};

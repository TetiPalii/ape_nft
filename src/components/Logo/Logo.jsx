import Image from 'next/image';
import LogoIcon from '../../../public/images/header/LogoIcon';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'}>
      <LogoIcon />
    </Link>
  );
};

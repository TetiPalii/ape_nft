import Image from 'next/image';
import LogoIcon from '../../../public/images/header/LogoIcon';
import Link from 'next/link';

export const Logo = ({ fill }) => {
  return (
    <Link href={'/'}>
      <LogoIcon fill={fill} />
    </Link>
  );
};

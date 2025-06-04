'use client';

import Link from 'next/link';
import TitleIcon from '@/assets/icon/title-icon';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';

const Header = () => {
  return (
    <header className="px-4 md:px-36 lg:px-44 py-3 fixed w-full z-50 bg-white border-b border-gray-200 flex justify-between items-center">
      <Link href="/">
        <TitleIcon />
      </Link>

      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};

export default Header;

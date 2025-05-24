'use client';

import MenuIcon from '@/assets/MenuIcon';
import Button from './button/Button';
import Link from 'next/link';
import TitleIcon from '@/assets/TitleIcon';
import { useState } from 'react';
import MobileMenu from './mobile/MobileMenu';

const Header = () => {
  return (
    <header className="border-b border-gray-200 px-4 py-3 flex justify-between items-center md:px-10 lg:px-20">
      <Link href="/">
        <TitleIcon />
      </Link>

      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOepn] = useState(false);

  const handleMenuOnClick = () => {
    setIsMenuOepn(!isMenuOpen);
  };

  return (
    <div className="z-20">
      <Button
        className="block md:hidden"
        variant="transparent"
        size="sm"
        onClick={handleMenuOnClick}>
        <MenuIcon />
      </Button>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleMenuOnClick={handleMenuOnClick}
      />
    </div>
  );
};

const DesktopHeader = () => {
  const hoverStyle =
    'hover:text-green-700 font-semibold text-sm transition-colors duration-100';
  return (
    <div className="hidden md:flex items-center gap-3">
      <Link href="/" className={hoverStyle}>
        대나무숲
      </Link>
      <Link href="/" className={hoverStyle}>
        룸메이트
      </Link>
      <Link
        href="https://dormitory.cu.ac.kr/board_Qgpk79"
        target="_blank"
        className={hoverStyle}>
        기숙사 공지사항
      </Link>
      <Link href="/">
        <Button variant="outline" size="sm">
          로그인
        </Button>
      </Link>
    </div>
  );
};

export default Header;

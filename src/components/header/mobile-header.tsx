'use client';
import { useState } from 'react';
import MobileMenu from '../mobile/mobile-menu';
import { Menu } from 'lucide-react';

const MobileHeader = ({ nickname }: { nickname: string }) => {
  const [isMenuOpen, setIsMenuOepn] = useState(false);

  const handleMenuOnClick = () => {
    setIsMenuOepn(!isMenuOpen);
  };

  return (
    <div className="z-20">
      <Menu
        size={20}
        className="block md:hidden"
        aria-label="메뉴 열기"
        onClick={handleMenuOnClick}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleMenuOnClick={handleMenuOnClick}
        nickname={nickname}
      />
    </div>
  );
};

export default MobileHeader;

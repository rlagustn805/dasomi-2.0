'use client';
import { useState } from 'react';
import MobileMenu from '../mobile/mobile-menu';
import MenuIcon from '@/assets/icon/menu-icon';
import { Button } from '@/components/ui/button';

const MobileHeader = ({ nickname }: { nickname: string }) => {
  const [isMenuOpen, setIsMenuOepn] = useState(false);

  const handleMenuOnClick = () => {
    setIsMenuOepn(!isMenuOpen);
  };

  return (
    <div className="z-20">
      <Button
        className="block md:hidden"
        variant="ghost"
        size="sm"
        onClick={handleMenuOnClick}>
        <MenuIcon />
      </Button>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleMenuOnClick={handleMenuOnClick}
        nickname={nickname}
      />
    </div>
  );
};

export default MobileHeader;

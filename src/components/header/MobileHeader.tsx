'use client';

import { useState } from 'react';
import Button from '../button/Button';
import MobileMenu from '../mobile/MobileMenu';
import MenuIcon from '@/assets/icon/menu-icon';

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

export default MobileHeader;

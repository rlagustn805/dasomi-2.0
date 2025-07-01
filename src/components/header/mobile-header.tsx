'use client';
import { useState } from 'react';
import MobileMenu from '../mobile/mobile-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

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
        aria-label="메뉴 열기"
        onClick={handleMenuOnClick}>
        <Menu />
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

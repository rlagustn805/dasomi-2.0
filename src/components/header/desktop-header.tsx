'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const DesktopHeader = ({ nickname }: { nickname: string }) => {
  const router = useRouter();
  const supabase = createClient();
  const [isMenuOpen, setIsMenuOepn] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  const handleIsMenuOpen = () => {
    setIsMenuOepn(!isMenuOpen);
  };

  const hoverStyle =
    'hover:text-green-700 font-semibold text-sm transition-colors duration-100';
  return (
    <div className="hidden md:flex items-center gap-3">
      <Link href="/description" className={hoverStyle}>
        이용안내
      </Link>
      <Link href="/roommates" className={hoverStyle}>
        룸메이트 찾기
      </Link>
      <Link
        href="https://dormitory.cu.ac.kr/board_Qgpk79"
        target="_blank"
        className={hoverStyle}>
        기숙사 공지사항
      </Link>

      {nickname ? (
        <div className="relative">
          <Button size="sm" variant="outline" onClick={handleIsMenuOpen}>
            {nickname}님
            <Menu />
          </Button>
          {isMenuOpen && (
            <div className="absolute right-0 flex flex-col gap-2 bg-white border text-sm p-2 w-28 font-semibold">
              <Link
                href="/profile"
                className="border-b border-gray-200 cursor-pointer hover:bg-gray-300/30 p-1">
                내 정보
              </Link>
              <Link
                href="/roommates/dashboard"
                className="border-b border-gray-200 cursor-pointer hover:bg-gray-300/30 p-1">
                룸메이트 정보
              </Link>

              <Button
                className="cursor-pointer"
                onClick={handleLogout}
                size="sm">
                로그아웃
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Button size="sm" variant="outline">
          <Link href="/login">로그인</Link>
        </Button>
      )}
    </div>
  );
};

export default DesktopHeader;

'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { User } from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';

const DesktopHeader = ({ nickname }: { nickname: string }) => {
  const router = useRouter();
  const supabase = createClient();
  const [isMenuOpen, setIsMenuOepn] = useState(false);
  const clearUser = useAuthStore(s => s.clearUser);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    clearUser();
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
        룸메이트 구하기
      </Link>
      <Link
        href="https://dormitory.cu.ac.kr/board_Qgpk79"
        target="_blank"
        className={hoverStyle}>
        기숙사 공지사항
      </Link>

      {nickname ? (
        <div className="relative">
          <Button variant="outline" onClick={handleIsMenuOpen}>
            <User />
          </Button>

          {isMenuOpen && (
            <div className="absolute right-0 flex flex-col gap-2 bg-white border text-sm p-2 w-36 font-semibold">
              <div className="border-b border-gray-200 cursor-pointer p-1">
                {nickname}님
              </div>

              <Link
                href="/profile"
                className="border-b border-gray-200 cursor-pointer hover:bg-gray-300/30 p-1">
                내 프로필
              </Link>
              <Link
                href="/roommates/dashboard"
                className="border-b border-gray-200 cursor-pointer hover:bg-gray-300/30 p-1">
                룸메이트 대시보드
              </Link>

              <div
                className="border-b border-gray-200 cursor-pointer hover:bg-gray-300/30 p-1"
                onClick={handleLogout}>
                로그아웃
              </div>
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

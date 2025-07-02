import { Button } from '@/components/ui/button';
import TitleIcon from '@/assets/icon/title-icon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useAuthStore } from '@/stores/useAuthStore';
import { X } from 'lucide-react';

const MobileMenu = ({
  isMenuOpen,
  handleMenuOnClick,
  nickname,
}: {
  isMenuOpen: boolean;
  handleMenuOnClick: () => void;
  nickname: string;
}) => {
  const router = useRouter();
  const supabase = createClient();

  const clearUser = useAuthStore(s => s.clearUser);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    handleMenuOnClick();
    clearUser();
    router.push('/');
    router.refresh();
  };

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white md:hidden animate-fade-in">
          <div className="px-4 py-3 flex flex-col h-full">
            <div className="flex justify-between items-center mb-14">
              <TitleIcon />

              <X size={20} onClick={handleMenuOnClick} />
            </div>
            {nickname && (
              <div className="mb-5">
                <p className="text-lg font-semibold">{nickname}님</p>
                <p>안녕하세요 !</p>
              </div>
            )}

            <nav className="flex flex-col text-lg gap-3">
              {nickname && (
                <>
                  <Link
                    href="/profile"
                    className="py-2 border-b border-gray-200"
                    onClick={handleMenuOnClick}>
                    내 프로필
                  </Link>
                  <Link
                    href="/roommates/dashboard"
                    className="py-2 border-b border-gray-200"
                    onClick={handleMenuOnClick}>
                    룸메이트 대시보드
                  </Link>
                </>
              )}
              <Link
                href="/roommates"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                룸메이트 구하기
              </Link>

              <Link
                href="https://dormitory.cu.ac.kr/board_Qgpk79"
                target="_blank"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                기숙사 공지사항
              </Link>

              <Link
                href="/start"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                앱으로 시작하기
              </Link>

              <Link
                href="/description"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                이용안내
              </Link>
            </nav>
            {nickname ? (
              <Button className="mt-auto mb-8" onClick={handleLogout}>
                로그아웃
              </Button>
            ) : (
              <Link href="/login" className="mt-auto mb-8">
                <Button className="w-full" onClick={handleMenuOnClick}>
                  로그인
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

import CloseIcon from '@/assets/icon/close-icon';
import { Button } from '@/components/ui/button';
import TitleIcon from '@/assets/icon/title-icon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    handleMenuOnClick();
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
              <Button variant="ghost" size="sm" onClick={handleMenuOnClick}>
                <CloseIcon />
              </Button>
            </div>
            {nickname && (
              <div className="mb-5">
                <p className="text-lg font-semibold">{nickname}님</p>
                <p>안녕하세요 !</p>
              </div>
            )}

            <nav className="flex flex-col text-lg gap-3">
              <Link
                href="/profile"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                내 정보
              </Link>
              <Link
                href="/roommates/dashboard"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                룸메이트 정보
              </Link>
              <Link
                href="/community"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                대나무숲
              </Link>
              <Link
                href="/roommate"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                룸메이트
              </Link>
              <Link
                href="https://dormitory.cu.ac.kr/board_Qgpk79"
                target="_blank"
                className="py-2 border-b border-gray-200"
                onClick={handleMenuOnClick}>
                기숙사 공지사항
              </Link>
            </nav>
            {nickname ? (
              <Button className="mt-auto mb-8" onClick={handleLogout}>
                로그아웃
              </Button>
            ) : (
              <Button className="mt-auto mb-8" onClick={handleMenuOnClick}>
                <Link href="/login">로그인</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

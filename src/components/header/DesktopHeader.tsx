import Link from 'next/link';
import Button from '../button/Button';

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

export default DesktopHeader;

import CloseIcon from '@/assets/CloseIcon';
import Button from '../button/Button';
import TitleIcon from '@/assets/TitleIcon';
import Link from 'next/link';

const MobileMenu = ({
  isMenuOpen,
  handleMenuOnClick,
}: {
  isMenuOpen: boolean;
  handleMenuOnClick: () => void;
}) => {
  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white md:hidden animate-fade-in">
          <div className="px-4 py-3 flex flex-col h-full">
            <div className="flex justify-between items-center mb-14">
              <TitleIcon />
              <Button
                variant="transparent"
                size="sm"
                onClick={handleMenuOnClick}>
                <CloseIcon />
              </Button>
            </div>

            <nav className="flex flex-col text-lg gap-3">
              <Link href="" className="py-2 border-b border-gray-200">
                대나무숲
              </Link>
              <Link href="" className="py-2 border-b border-gray-200">
                대나무숲
              </Link>
              <Link href="" className="py-2 border-b border-gray-200">
                대나무숲
              </Link>
              <Link href="" className="py-2 border-b border-gray-200">
                대나무숲
              </Link>
            </nav>

            <div className="mt-auto mb-8 bg-green-600 py-3 px-2 text-white font-semibold text-center rounded">
              <Link href="/">로그인</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

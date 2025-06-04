import CloseIcon from '@/assets/icon/close-icon';
import { Button } from '@/components/ui/button';
import TitleIcon from '@/assets/icon/title-icon';
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
              <Button variant="ghost" size="sm" onClick={handleMenuOnClick}>
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

            <Button className="mt-auto mb-8">
              <Link href="/">로그인</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

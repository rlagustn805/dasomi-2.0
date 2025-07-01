import Link from 'next/link';
import TitleIcon from '@/assets/icon/title-icon';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const Header = async ({ nickname }: { nickname: string }) => {
  return (
    <header className="px-4 md:px-36 lg:px-44 py-3 fixed w-full z-50 bg-white border-b border-gray-200 flex justify-between items-center">
      <Link href="/" aria-label="홈으로 이동">
        <TitleIcon />
      </Link>

      <MobileHeader nickname={nickname} />
      <DesktopHeader nickname={nickname} />
    </header>
  );
};

export default Header;

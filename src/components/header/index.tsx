import Link from 'next/link';
import TitleIcon from '@/assets/icon/title-icon';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const Header = async () => {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let nickname = null;

  if (user) {
    const { data: userProfile, error } = await supabase
      .from('users')
      .select('nickname')
      .eq('id', user.id)
      .maybeSingle();

    if (error) {
      console.error(error.message);
    }
    nickname = userProfile?.nickname ?? null;
  }

  return (
    <header className="px-4 md:px-36 lg:px-44 py-3 fixed w-full z-50 bg-white border-b border-gray-200 flex justify-between items-center">
      <Link href="/">
        <TitleIcon />
      </Link>

      <MobileHeader nickname={nickname} />
      <DesktopHeader nickname={nickname} />
    </header>
  );
};

export default Header;

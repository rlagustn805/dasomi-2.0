import Link from 'next/link';
import TitleSlogan from './title-slogan';
import { Button } from '@/components/ui/button';
import MobileRmFilter from '@/components/roommates/rm-filter/mobile-rm-filter';

const Title = () => {
  return (
    <section className="px-4 md:px-36 lg:px-44 pt-16 flex flex-col bg-gradient-to-b gap-6 from-green-500/5">
      <TitleSlogan />
      <div className="flex-row justify-center hidden lg:flex">
        <Button size="sm">
          <Link href="/roommates/">룸메이트 찾기</Link>
        </Button>
      </div>
      <MobileRmFilter />
    </section>
  );
};

export default Title;

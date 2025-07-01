import Link from 'next/link';
import TitleSlogan from './title-slogan';
import { Button } from '@/components/ui/button';
import MobileRmFilter from '@/components/roommates/rm-filter/mobile-rm-filter';

const Title = () => {
  return (
    <section className="px-4 md:px-36 lg:px-44 pt-16 flex flex-col bg-gradient-to-b gap-6 from-green-500/5">
      <TitleSlogan />
      <div className="text-sm text-muted-foreground  md:text-center">
        다솜이가 여러분과 함께 할 룸메이트를 찾아 드릴게요.
      </div>
      <div className="flex-row justify-center hidden lg:flex">
        <Button size="sm">
          <Link href="/roommates/">룸메이트 찾기</Link>
        </Button>
      </div>

      <div className="flex-row justify-start flex lg:hidden">
        <Button size="sm">
          <Link href="/start">앱으로 시작하기</Link>
        </Button>
      </div>

      <MobileRmFilter />
    </section>
  );
};

export default Title;

import Link from 'next/link';
import TitleSlogan from './title-slogan';
import { Button } from '@/components/ui/button';
import MobileRmFilter from '@/components/roommates/rm-filter/mobile-rm-filter';

const Title = () => {
  return (
    <section className="px-4 md:px-36 lg:px-44 pt-16 flex flex-col bg-gradient-to-b gap-1.5 from-green-500/5">
      <TitleSlogan />
      <div className="text-sm text-muted-foreground  md:text-center">
        몇 가지 질문만으로, 딱 맞는 룸메이트를 찾아드릴게요.
      </div>
      <div className="flex-row justify-center hidden lg:flex">
        {/* <Button size="sm">
          <Link href="/roommates/">
            <div className="flex items-baseline gap-1">
              <span className="text-lg">🏠</span>
              룸메이트 구하기
            </div>
          </Link>
        </Button> */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <Button
            className="relative w-full bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
            size="sm">
            <Link href="/roommates/">
              <div className="flex items-baseline gap-1">
                <span className="text-lg">🏠</span>
                룸메이트 구하기
              </div>
              <span className="text-xl absolute -bottom-3 -right-4 rotate-[-45deg]">
                👆
              </span>
            </Link>
          </Button>
        </div>
      </div>

      <MobileRmFilter />
      <div className="flex-row justify-start flex lg:hidden mt-5">
        <Button size="sm" variant="outline">
          <Link href="/start">앱으로 시작하기</Link>
        </Button>
      </div>
    </section>
  );
};

export default Title;

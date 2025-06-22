import Link from 'next/link';
import TitleSlogan from './title-slogan';
import { Button } from '@/components/ui/button';

const Title = () => {
  return (
    <section className="px-4 md:px-36 lg:px-44 pt-16 flex flex-col bg-gradient-to-b gap-6 from-green-500/5">
      <TitleSlogan />
      <div className="flex flex-col gap-5 md:flex-row md:justify-center">
        <Button size="sm">
          <Link href="/roommates/">룸메이트 찾기</Link>
        </Button>

        <Button size="sm" variant="outline">
          <Link href="/">대나무숲 가기</Link>
        </Button>
      </div>
    </section>
  );
};

export default Title;

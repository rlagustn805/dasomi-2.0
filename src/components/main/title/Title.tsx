import Link from 'next/link';
import Button from '../../button/Button';
import TitleSlogan from './TitleSlogan';

const Title = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 pt-28 flex flex-col bg-gradient-to-b gap-6 from-green-500/5">
      <TitleSlogan />
      <div className="flex flex-col gap-5 md:flex-row md:justify-center">
        <Link href="/">
          <Button className="w-full">룸메이트 찾기</Button>
        </Link>

        <Link href="/">
          <Button variant="outline" className="w-full">
            대나무숲 가기
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Title;

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CommWriteHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-10">
      <Link href="/community">
        <Button variant="ghost" size="icon" className="touch-target">
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </Link>
      <div>
        <h2 className="font-semibold text-xl">글 작성하기</h2>
        <span className="text-muted-foreground">
          대나무 숲에 새로운 글을 작성해보세요.
        </span>
      </div>
    </div>
  );
};

export default CommWriteHeader;

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CommDetailHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-10">
      <Link href="/community">
        <Button variant="ghost" size="icon" className="touch-target">
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </Link>
      <div>
        <h2 className="font-semibold text-xl">게시글</h2>
        <span className="text-muted-foreground">대나무숲</span>
      </div>
    </div>
  );
};

export default CommDetailHeader;

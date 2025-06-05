import CommWriteAnonymity from './comm-write-anonymity';
import CommWriteCategory from './comm-write-category';
import CommWriteContent from './comm-write-content';
import CommWriteHeader from './comm-write-header';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CommWriteNote from './comm-write-note';
import { Button } from '@/components/ui/button';

const CommWrite = () => {
  return (
    <div>
      <CommWriteHeader />
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">새 게시글</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm font-semibold">카테고리</p>
          <div className="flex items-center justify-between">
            <CommWriteCategory />
            <CommWriteAnonymity />
          </div>
          <CommWriteContent />
          <CommWriteNote />
        </CardContent>
        <CardFooter className="flex">
          <Button variant="secondary" className="flex-1">
            취소
          </Button>
          <Button className="flex-1">작성하기</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CommWrite;

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

const CommentWrite = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>댓글 작성</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          className="min-h-[100px] resize-none"
          placeholder="댓글을 입력하세요."
          maxLength={500}
        />
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between items-center">
          <p className="text-xs text-muted-foreground">0/500</p>
          <Button>
            <Send className="mr-1 h-3 w-3" />
            댓글 작성
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommentWrite;

import { Heart } from 'lucide-react';
import { comments } from '../comm-detail/post';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CommentList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>댓글 {comments.length}개</CardTitle>
      </CardHeader>
      <CardContent>
        {comments.map(comment => (
          <div key={comment.id} className="py-4">
            <div className="text-sm flex items-center gap-2 py-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-xs text-muted-foreground">
                {comment.createdAt}
              </span>
            </div>
            <div className="text-sm leading-relaxed">{comment.content}</div>

            <div className="flex items-center gap-2 border-b border-gray-200 py-2">
              <Button size="icon" variant="ghost" className="h-6 px-2 text-xs">
                <Heart className="h-3 w-3" />
                {comment.likes}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-muted-foreground">
                답글
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-muted-foreground">
                신고
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CommentList;

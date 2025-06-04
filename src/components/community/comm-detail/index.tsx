import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { comments, post } from './post';
import { Button } from '@/components/ui/button';
import { Flag, Heart, MessageSquare } from 'lucide-react';
import CommentWrite from '../comments/comment-write';
import CommentList from '../comments/comment-list';

const CommDetail = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card key={post.id}>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.createdAt}
            </span>
          </div>
          <CardTitle className="text-xl">{post.title}</CardTitle>
          <CardDescription>{post.author}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center px-4 py-4 pb-0 border-t">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
              {post.likes}
            </Button>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              {comments.length}
            </span>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Flag className="h-4 w-4 mr-1" />
            신고
          </Button>
        </CardFooter>
      </Card>

      <CommentWrite />
      <CommentList />
    </div>
  );
};

export default CommDetail;

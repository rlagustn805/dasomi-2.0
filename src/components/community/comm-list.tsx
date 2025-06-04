import Link from 'next/link';
import { posts } from './post';
import { Heart, MessageSquare } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const CommList = () => {
  return (
    <div className="">
      {posts.map(post => (
        <Link href={`/community/${post.id}`} key={post.id}>
          <Card className="gap-2 p-3 px-0 rounded-none">
            <CardHeader className="">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary mb-2">
                    {post.category}
                  </span>
                  <CardTitle className="text-base md:text-lg">
                    {post.title}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="">
              <p className="text-muted-foreground line-clamp-2 text-sm">
                {post.content}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between text-xs text-muted-foreground">
              <div>
                {post.author} • {post.createdAt}
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Heart className="h-3 w-3" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> {post.comments}
                </span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CommList;

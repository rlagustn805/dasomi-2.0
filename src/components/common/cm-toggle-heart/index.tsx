'use client';

import { Button } from '@/components/ui/button';
import { deleteIsLike, insertIsLike } from '@/services/api-likes/api-likes';
import { RoommateCardData } from '@/types/roommates';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type isUser = {
  currentUserId: string | null;
  currentUserGender: string | null;
};

type CmToggleHeartProps = Pick<isUser, 'currentUserId'> &
  Pick<RoommateCardData, 'roommateId'> & {
    currentIsLiked: boolean;
  };

const CmToggleHeart = ({
  currentIsLiked = false,
  currentUserId,
  roommateId,
}: CmToggleHeartProps) => {
  const [isLiked, setIsLiked] = useState(currentIsLiked);

  const toggleLike = async () => {
    if (isLiked && currentUserId) {
      setIsLiked(false);
      await deleteIsLike(roommateId);
    } else if (!isLiked && currentUserId) {
      setIsLiked(true);
      await insertIsLike(roommateId);
    }
  };

  if (currentUserId === null) {
    return (
      <Link href="/login">
        <Button variant="ghost">
          <Heart />
        </Button>
      </Link>
    );
  }

  return (
    <Button onClick={toggleLike} variant="ghost">
      {isLiked ? <Heart stroke="none" fill="red" /> : <Heart />}
    </Button>
  );
};

export default CmToggleHeart;

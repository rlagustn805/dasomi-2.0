import { Button } from '@/components/ui/button';
import { RoommateUserInfo } from '@/types/roommates';
import { Heart } from 'lucide-react';

type isUser = {
  currentUserId: string | null;
  currentUserGender: string | null;
};

const RmCardHeader = ({
  nickname,
  mbti,
  gender,
  id,
  currentUserId,
}: Pick<RoommateUserInfo, 'nickname' | 'mbti' | 'gender' | 'id'> &
  Partial<isUser>) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-muted inline-block rounded-full text-2xl">
          {gender === 'male' ? '👨🏻' : '👩🏻'}
        </div>

        <span className="font-semibold text-sm">{nickname}</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-xl">{mbti}</span>
      </div>
      {id !== currentUserId && (
        <Button variant="ghost">
          <Heart />
        </Button>
      )}
    </div>
  );
};

export default RmCardHeader;

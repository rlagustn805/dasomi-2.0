import CmToggleHeart from '@/components/common/cm-toggle-heart';
import { RoommateCardData, RoommateUserInfo } from '@/types/roommates';

type isUser = {
  currentUserId: string | null;
  currentUserGender: string | null;
};

type RmCardHeaderProps = Pick<
  RoommateUserInfo,
  'nickname' | 'mbti' | 'gender' | 'id'
> &
  Partial<isUser> &
  Pick<RoommateCardData, 'isLiked' | 'roommateId'>;

const RmCardHeader = ({
  nickname,
  mbti,
  gender,
  id,
  currentUserId,
  isLiked,
  roommateId,
}: RmCardHeaderProps) => {
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
        <CmToggleHeart
          currentIsLiked={isLiked}
          currentUserId={currentUserId ?? null}
          roommateId={roommateId}
        />
      )}
    </div>
  );
};

export default RmCardHeader;

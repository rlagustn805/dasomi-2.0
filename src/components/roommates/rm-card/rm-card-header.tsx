import BookMarkOff from '@/assets/icon/bookmark-off';
import { Button } from '@/components/ui/button';
import { RoommateUserInfo } from '@/types/roommates';

const RmCardHeader = ({
  nickname,
  mbti,
  gender,
  dormitory,
}: {
  dormitory: string;
} & Pick<RoommateUserInfo, 'nickname' | 'mbti' | 'gender'>) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-green-100 inline-block rounded-full text-green-400">
          {gender === 'male' ? '남자' : '여자'}
        </div>
        <span>{dormitory}</span>
        <span className="font-bold">{nickname}</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-xl">{mbti}</span>
      </div>
      <Button variant="ghost">
        <BookMarkOff width={18} height={18} />
      </Button>
    </div>
  );
};

export default RmCardHeader;

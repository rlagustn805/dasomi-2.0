import BookMarkOff from '@/assets/icon/bookmark-off';
import People from '@/assets/icon/people-icon';
import { RoomMatesType } from '../type';
import { Button } from '@/components/ui/button';

const RmCardHeader = ({
  nickname,
  mbti,
}: Pick<RoomMatesType, 'nickname' | 'mbti'>) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-green-100 inline-block rounded-full text-green-400">
          <People />
        </div>
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

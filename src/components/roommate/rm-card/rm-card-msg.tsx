import { RoomMateProfileType } from '@/types/roommates';

const RmCardMsg = ({ message }: Pick<RoomMateProfileType, 'message'>) => {
  return (
    <div className="">
      <p className="text-gray-500 text-xs">하고 싶은 말</p>
      <p className="text-sm">{message || 'ㅁㄴㅇㅁㄴㅇㅁㄴㅇ'}</p>
    </div>
  );
};

export default RmCardMsg;

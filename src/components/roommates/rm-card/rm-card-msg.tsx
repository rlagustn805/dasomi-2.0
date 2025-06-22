import { RoommateInfo } from '@/types/roommates';

const RmCardMsg = ({ message }: Pick<RoommateInfo, 'message'>) => {
  return (
    <div className="">
      <p className="text-gray-500 text-xs">하고 싶은 말</p>
      <p className="text-sm">{message || '.'}</p>
    </div>
  );
};

export default RmCardMsg;

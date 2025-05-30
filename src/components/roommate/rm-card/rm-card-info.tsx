import { RoomMatesType } from '../type';

const RmCardInfo = ({
  department,
  year,
  roomType,
  sociability,
  cleanliness,
  matchingStatus,
}: Pick<
  RoomMatesType,
  | 'department'
  | 'year'
  | 'roomType'
  | 'sociability'
  | 'cleanliness'
  | 'matchingStatus'
>) => {
  return (
    <div className="text-sm grid grid-cols-3 gap-3 items-center">
      <div>
        <p className="text-gray-500 text-xs">학과</p>
        <span>{department}</span>
      </div>

      <div>
        <p className="text-gray-500 text-xs">학년</p>
        <span>{year}</span>
      </div>

      <div>
        <p className="text-gray-500 text-xs">인실</p>
        <span>{roomType}</span>
      </div>

      <div>
        <p className="text-gray-500 text-xs">친목도</p>
        <div className="flex gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 w-4 md:w-6 rounded-full ${
                i < sociability ? 'bg-green-600' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-gray-500 text-xs">청결도</p>
        <div className="flex gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 w-4 md:w-6 rounded-full ${
                i < cleanliness ? 'bg-green-600' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-gray-500 text-xs">매칭 상태</p>
        <span className="text-green-600">{matchingStatus}</span>
      </div>
    </div>
  );
};

export default RmCardInfo;

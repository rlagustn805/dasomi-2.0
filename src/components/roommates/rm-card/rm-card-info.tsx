import { RoommateInfo, RoommateUserInfo } from '@/types/roommates';

const MatchingLabels: Record<string, string> = {
  available: '매칭 가능',
  matching: '매칭중',
  matched: '매칭 완료',
};

type RmCardInfoProps = {
  department: RoommateUserInfo['department'];
  year: RoommateUserInfo['studentId'];
  roomType: RoommateInfo['roomType'];
  sociability: RoommateInfo['sociability'];
  cleanliness: RoommateInfo['cleanliness'];
  matchingStatus: RoommateInfo['matchingStatus'];
};

const RmCardInfo = ({
  department,
  year,
  roomType,
  sociability,
  cleanliness,
  matchingStatus,
}: RmCardInfoProps) => {
  return (
    <div className="text-sm grid grid-cols-3 gap-3 items-center">
      <div>
        <p className="text-gray-500 text-xs">학과</p>
        <span>{department}</span>
      </div>

      <div>
        <p className="text-gray-500 text-xs">학번</p>
        <span>{year}학번</span>
      </div>

      <div>
        <p className="text-gray-500 text-xs">인실</p>
        <span>{roomType === '2room' ? '2인실' : '4인실'}</span>
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
        <p className="text-gray-500 text-xs">깔끔도</p>
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
        <span
          className={`${
            matchingStatus === 'available' ? 'text-green-600' : 'text-red-500'
          }`}>
          {MatchingLabels[matchingStatus as string]}
        </span>
      </div>
    </div>
  );
};

export default RmCardInfo;

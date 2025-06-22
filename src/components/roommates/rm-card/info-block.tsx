import { RoommatesType } from '../type';

const InfoBlock = ({
  smoking,
  indoorEating,
  sleepHabit,
}: Pick<RoommatesType, 'smoking' | 'indoorEating' | 'sleepHabit'>) => {
  return (
    <div className="flex gap-3 mb-5">
      <div className="text-xs">
        {smoking ? (
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
            비흡연
          </span>
        ) : (
          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            흡연
          </span>
        )}
      </div>

      <div className="text-xs">
        {indoorEating ? (
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
            실내취식 가능
          </span>
        ) : (
          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            실내취식 불가능
          </span>
        )}
      </div>

      <div className="text-xs">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
          {sleepHabit}
        </span>
      </div>
    </div>
  );
};

export default InfoBlock;

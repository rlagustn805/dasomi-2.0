import BadgeItem from './badge-item';
import { RoomMatesType } from '../type';

const RmCardCondition = ({
  smoking,
  indoorEating,
  sleepHabit,
}: Pick<RoomMatesType, 'smoking' | 'indoorEating' | 'sleepHabit'>) => {
  return (
    <div className="flex gap-3">
      <BadgeItem condition={!smoking} trueLabel="비흡연" falseLabel="흡연" />
      <BadgeItem
        condition={indoorEating}
        trueLabel="실내취식 가능"
        falseLabel="실내취식 불가능"
      />

      <div className="text-xs">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
          {sleepHabit}
        </span>
      </div>
    </div>
  );
};

export default RmCardCondition;

import BadgeItem from './badge-item';
import { RoomMatesType } from '../type';

const sleepHabitLabels: Record<string, string> = {
  sleep_no_habit: '잠버릇 없어요',
  sleep_walking: '잠꼬대 해요',
  sleep_snoring: '코골이 해요',
  sleep_bruxism: '이갈이 해요',
};

const sleepPatternLabels: Record<string, string> = {
  sleep_early: '일찍 자요 (22시 ~ 00시)',
  sleep_late: '늦게 자요 (00시 ~ 03시)',
  sleep_irregular: '자는 시간 불규칙해요',
};

const noiseLabels: Record<string, string> = {
  noise_ok: '소음 상관 없어요',
  noise_little: '짧은 통화 정도만 원해요',
  noise_quiet: '조용한걸 원해요',
};

const RmCardCondition = ({
  smoking,
  indoorEating,
  sleepHabit,
  sleepPattern,
  noise,
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
          {sleepHabitLabels[sleepHabit]}
        </span>
      </div>

      <div className="text-xs">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
          {sleepPatternLabels[sleepPattern]}
        </span>
      </div>

      <div className="text-xs">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
          {noiseLabels[noise]}
        </span>
      </div>
    </div>
  );
};

export default RmCardCondition;

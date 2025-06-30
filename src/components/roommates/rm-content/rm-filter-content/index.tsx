import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CmField from '../../../common/cm-field';
import RoomTypeSelect from '../rm-content-item/room-type-select';
import EatingSwitch from '../rm-content-item/eating-switch';
import SleepPatternSelect from '../rm-content-item/sleep-pattern';
import SmokingSwitch from '../rm-content-item/smoking-switch';
import NoiseSelect from '../rm-content-item/noise';
import { Button } from '@/components/ui/button';
import DormitorySelect from '../rm-content-item/dormitory';
import CleanlinessSliderRange from '../rm-content-item/cleanliness-slider-range';
import TendencySliderRange from '../rm-content-item/tendency-slider-range';
import GenderSelect from '../rm-content-item/gender-select';
import MatchingStatusSwitch from '../rm-content-item/matching-status-switch';
import SleepHabitSwitch from '../rm-content-item/sleep-habit-switch';
import CmMbti from '@/components/common/cm-mbti';
import { RoommateFilterState } from '@/types/roommates';
import { useFilterHandlers } from '@/hooks/useFilterHandlers';

interface RmFilterContentProps extends RoommateFilterState {
  label: string;
  handleChange: <K extends keyof RoommateFilterState>(
    key: K,
    value: RoommateFilterState[K]
  ) => void;
  handleFilterOpen?: () => void;
  handleApply: () => void;
}

const RmFilterContent = ({
  label,
  dormitory,
  gender,
  mbti,
  noise,
  roomType,
  smoking,
  indoorEating,
  sleepHabit,
  sleepPattern,
  matchingStatus,
  sociabilityRange,
  cleanlinessRange,
  handleChange,
  handleFilterOpen,
  handleApply,
}: RmFilterContentProps) => {
  const handlers = useFilterHandlers<RoommateFilterState>(handleChange);
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>

        <CardDescription className="text-sm mb-2 ">
          필요한 부분만 적용할 수 있어요!
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 text-sm">
        <MatchingStatusSwitch
          value={matchingStatus}
          onChange={handlers.handleMatchingStatusChange}
        />

        <CmField label="성별 선택">
          <GenderSelect value={gender} onChange={handlers.handleGenderChange} />
        </CmField>

        <CmField label="MBTI 선택">
          <CmMbti value={mbti} onChange={handlers.handleMbtiChange} />
        </CmField>

        <CmField label="기숙사 선택">
          <DormitorySelect
            value={dormitory}
            onChange={handlers.handleDormitoryChange}
          />
        </CmField>
        <CmField label="인실 선택">
          <RoomTypeSelect
            value={roomType}
            onChange={handlers.handleRoomTypeChange}
          />
        </CmField>
        <CmField label="친목">
          <TendencySliderRange
            value={[sociabilityRange.min, sociabilityRange.max]}
            onChange={([min, max]) =>
              handlers.handleSociabilityRangeChange({ min, max })
            }
          />
        </CmField>

        <CmField label="깔끔">
          <CleanlinessSliderRange
            value={[cleanlinessRange.min, cleanlinessRange.max]}
            onChange={([min, max]) =>
              handlers.handleCleanlinessRangeChange({ min, max })
            }
          />
        </CmField>

        <EatingSwitch
          value={indoorEating}
          onChange={handlers.handleIndoorEatingChange}
        />

        <SmokingSwitch
          value={smoking}
          onChange={handlers.handleSmokingChange}
        />

        <SleepHabitSwitch
          value={sleepHabit}
          onChange={handlers.handleSleepHabitChange}
        />

        <CmField label="수면패턴">
          <SleepPatternSelect
            value={sleepPattern}
            onChange={handlers.handleSleepPatternChange}
          />
        </CmField>
        <CmField label="소음">
          <NoiseSelect value={noise} onChange={handlers.handleNoiseChange} />
        </CmField>
      </CardContent>

      <CardFooter className="flex gap-3 mt-5">
        <Button
          size="sm"
          variant="outline"
          className="flex-1 block lg:hidden"
          onClick={handleFilterOpen}>
          취소
        </Button>

        <Button
          size="sm"
          className="flex-1 block"
          onClick={() => {
            if (handleFilterOpen && window.innerWidth < 1024) {
              handleFilterOpen();
            }
            handleApply();
          }}>
          찾기
        </Button>
      </CardFooter>
    </>
  );
};

export default RmFilterContent;

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

interface RmFilterContentProps extends RoommateFilterState {
  label: string;
  handleChange: <K extends keyof RoommateFilterState>(
    key: K,
    value: RoommateFilterState[K]
  ) => void;
  handleFilterOpen?: () => void;
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
}: RmFilterContentProps) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>

        <CardDescription className="text-xs mb-2">
          필요한 부분만 적용할 수 있어요!
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 text-sm">
        <MatchingStatusSwitch
          value={matchingStatus}
          onChange={value => handleChange('matchingStatus', value)}
        />

        <CmField label="성별 선택">
          <GenderSelect
            value={gender}
            onChange={value => handleChange('gender', value)}
          />
        </CmField>

        <CmField label="MBTI 선택">
          <CmMbti
            value={mbti}
            onChange={value => handleChange('mbti', value)}
          />
        </CmField>

        <CmField label="기숙사 선택">
          <DormitorySelect
            value={dormitory}
            onChange={value => handleChange('dormitory', value)}
          />
        </CmField>
        <CmField label="인실 선택">
          <RoomTypeSelect
            value={roomType}
            onChange={value => handleChange('roomType', value)}
          />
        </CmField>
        <CmField label="성향">
          <TendencySliderRange
            value={[sociabilityRange.min, sociabilityRange.max]}
            onChange={([min, max]) =>
              handleChange('sociabilityRange', { min, max })
            }
          />
        </CmField>

        <CmField label="깔끔">
          <CleanlinessSliderRange
            value={[cleanlinessRange.min, cleanlinessRange.max]}
            onChange={([min, max]) =>
              handleChange('cleanlinessRange', { min, max })
            }
          />
        </CmField>

        <EatingSwitch
          value={indoorEating}
          onChange={value => handleChange('indoorEating', value)}
        />

        <SmokingSwitch
          value={smoking}
          onChange={value => handleChange('smoking', value)}
        />

        <SleepHabitSwitch
          value={sleepHabit}
          onChange={value => handleChange('sleepHabit', value)}
        />

        <CmField label="수면패턴">
          <SleepPatternSelect
            value={sleepPattern}
            onChange={value => handleChange('sleepPattern', value)}
          />
        </CmField>
        <CmField label="소음">
          <NoiseSelect
            value={noise}
            onChange={value => handleChange('noise', value)}
          />
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
      </CardFooter>
    </>
  );
};

export default RmFilterContent;

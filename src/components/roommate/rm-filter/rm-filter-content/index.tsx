import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import RmFilterField from './rm-filter-field';
import RoomTypeSelect from './room-type-select';
import TendencySlider from './tendency-slider';
import CleanlinessSlider from './cleanliness-slider';
import EatingSwitch from './eating-switch';
import SleepPatternSelect from './sleep-pattern';
import SmokingSwitch from './smoking-switch';
import { Button } from '@/components/ui/button';

const RmFilterContent = ({
  handleFilterOpen,
}: {
  handleFilterOpen?: () => void;
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">필터 설정</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 text-sm">
        <RmFilterField label="인실 선택">
          <RoomTypeSelect />
        </RmFilterField>

        <RmFilterField label="성향">
          <TendencySlider />
        </RmFilterField>

        <RmFilterField label="깔끔">
          <CleanlinessSlider />
        </RmFilterField>

        <EatingSwitch />
        <SmokingSwitch />

        <RmFilterField label="수면패턴">
          <SleepPatternSelect />
        </RmFilterField>
      </CardContent>
      <CardFooter className="flex gap-3 mt-5">
        <Button
          size="sm"
          variant="outline"
          className="flex-1 block lg:hidden"
          onClick={handleFilterOpen}>
          취소
        </Button>
        <Button size="sm" className="flex-1">
          적용
        </Button>
      </CardFooter>
    </>
  );
};

export default RmFilterContent;

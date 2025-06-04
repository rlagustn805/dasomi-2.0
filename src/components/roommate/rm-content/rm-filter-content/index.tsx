import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CmFilterField from '../../../common/cm-filter-field';
import RoomTypeSelect from './room-type-select';
import TendencySlider from './tendency-slider';
import CleanlinessSlider from './cleanliness-slider';
import EatingSwitch from './eating-switch';
import SleepPatternSelect from './sleep-pattern';
import SmokingSwitch from './smoking-switch';
import { Button } from '@/components/ui/button';

const RmContent = ({
  label,
  handleFilterOpen,
}: {
  label: string;
  handleFilterOpen?: () => void;
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 text-sm">
        <CmFilterField label="인실 선택">
          <RoomTypeSelect />
        </CmFilterField>

        <CmFilterField label="성향">
          <TendencySlider />
        </CmFilterField>

        <CmFilterField label="깔끔">
          <CleanlinessSlider />
        </CmFilterField>

        <EatingSwitch />
        <SmokingSwitch />

        <CmFilterField label="수면패턴">
          <SleepPatternSelect />
        </CmFilterField>
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

export default RmContent;

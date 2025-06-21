import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SleepPatternSelectProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const SleepPatternSelect = ({ value, onChange }: SleepPatternSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="수면패턴 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="sleep_early">
            일찍 자요 &#40;22시 ~ 00시&#41;
          </SelectItem>
          <SelectItem value="sleep_late">
            늦게 자요 &#40;00시 ~ 03시&#41;
          </SelectItem>
          <SelectItem value="sleep_irregular">불규칙해요</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SleepPatternSelect;

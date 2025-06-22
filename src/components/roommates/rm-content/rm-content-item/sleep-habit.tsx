import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SleepHabitSelectProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const SleepHabitSelect = ({ value, onChange }: SleepHabitSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="잠버릇 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="sleep_no_habit">잠버릇 없어요</SelectItem>
          <SelectItem value="sleep_walking">잠꼬대 해요</SelectItem>
          <SelectItem value="sleep_snoring">코골이 해요</SelectItem>
          <SelectItem value="sleep_bruxism">이갈이 해요</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SleepHabitSelect;

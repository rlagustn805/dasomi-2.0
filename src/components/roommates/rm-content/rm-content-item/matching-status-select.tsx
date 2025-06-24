import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MatchingStatusSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const MatchingStatusSelect = ({
  value,
  onChange,
}: MatchingStatusSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="매칭 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="available">매칭가능</SelectItem>
          <SelectItem value="matching">매칭중</SelectItem>
          <SelectItem value="matched">매칭완료</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MatchingStatusSelect;

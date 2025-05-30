import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SleepPatternSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="수면패턴 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">일찍 자고 일찍 일어나요</SelectItem>
          <SelectItem value="banana">늦게 자고 늦게 일어나요</SelectItem>
          <SelectItem value="banana2">늦게 자고 일찍 일어나요</SelectItem>
          <SelectItem value="banana3">불규칙해요</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SleepPatternSelect;

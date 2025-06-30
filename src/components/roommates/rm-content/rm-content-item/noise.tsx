import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { memo } from 'react';

interface NoiseSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const NoiseSelect = ({ value, onChange }: NoiseSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="소음 선호도 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="noise_ok">소음 상관 없어요</SelectItem>
          <SelectItem value="noise_little">짧은 통화 정도만 원해요</SelectItem>
          <SelectItem value="noise_quiet">조용한걸 원해요</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(NoiseSelect);

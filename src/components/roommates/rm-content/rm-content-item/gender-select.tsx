import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { memo } from 'react';

interface GenderSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const GenderSelect = ({ value, onChange }: GenderSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="성별 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="male">남자</SelectItem>
          <SelectItem value="female">여자</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(GenderSelect);

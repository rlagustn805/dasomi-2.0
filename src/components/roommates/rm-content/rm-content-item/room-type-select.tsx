import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { memo } from 'react';

interface RoomTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const RoomTypeSelect = ({ value, onChange }: RoomTypeSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="인실 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="2room">2인실</SelectItem>
          <SelectItem value="4room">4인실</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(RoomTypeSelect);

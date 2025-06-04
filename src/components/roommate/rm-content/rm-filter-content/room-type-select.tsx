import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const RoomTypeSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="인실 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">2인실</SelectItem>
          <SelectItem value="banana">4인실</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RoomTypeSelect;

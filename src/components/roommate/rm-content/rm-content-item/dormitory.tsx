import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DormitorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const DormitorySelect = ({ value, onChange }: DormitorySelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="기숙사 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="amare">아마레관</SelectItem>
          <SelectItem value="chaminjae">참인재관</SelectItem>
          <SelectItem value="precognition">예지관</SelectItem>
          <SelectItem value="servire">세르비레관</SelectItem>
          <SelectItem value="hyosung">효성관</SelectItem>
          <SelectItem value="kimdaegun">성김대건관</SelectItem>
          <SelectItem value="dasom">다솜관</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DormitorySelect;

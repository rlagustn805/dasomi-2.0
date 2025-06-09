import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '../../ui/select';
import { studentIdArr } from './cm-student-id';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CmStudentId = ({ value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="학번 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {studentIdArr.map(id => (
            <SelectItem key={id} value={id}>
              {id}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CmStudentId;

import { memo } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '../../ui/select';
import { cmMbtiArr } from './cm-mbti';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CmMbti = ({ value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="MBTI 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {cmMbtiArr.map(mbti => (
            <SelectItem key={mbti} value={mbti}>
              {mbti}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(CmMbti);

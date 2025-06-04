'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '../../ui/select';
import { cmMbtiArr } from './cm-mbti';

const CmMbti = () => {
  const [mbti, setMbti] = useState('');

  return (
    <Select value={mbti} onValueChange={setMbti}>
      <SelectTrigger className="w-[200px]">
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

export default CmMbti;

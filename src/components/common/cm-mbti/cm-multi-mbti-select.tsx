'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check } from 'lucide-react';
import { cmMbtiArr } from './cm-mbti';

interface Props {
  value: string[];
  onChange: (value: string[]) => void;
}

const CmMultiMbtiSelect = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (mbti: string) => {
    if (value.includes(mbti)) {
      onChange(value.filter(v => v !== mbti));
    } else {
      onChange([...value, mbti]);
    }
  };

  const isChecked = (mbti: string) => value.includes(mbti);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {value.length > 0 ? value.join(', ') : 'MBTI 선택'}
          <Check className="ml-2 w-4 h-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2">
        <ScrollArea className="h-[180px]">
          {cmMbtiArr.map(mbti => (
            <div
              key={mbti}
              className="flex items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-muted rounded-md"
              onClick={() => handleToggle(mbti)}>
              <Checkbox checked={isChecked(mbti)} />
              <span className="text-sm">{mbti}</span>
            </div>
          ))}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default CmMultiMbtiSelect;

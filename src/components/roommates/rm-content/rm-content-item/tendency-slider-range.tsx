import { Slider } from '@/components/ui/slider';
import { memo } from 'react';
interface TendencyRangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const TendencySliderRange = ({ value, onChange }: TendencyRangeSliderProps) => {
  return (
    <>
      <Slider
        value={value}
        max={5}
        step={1}
        minStepsBetweenThumbs={1}
        onValueChange={(val: [number, number]) => onChange(val)}
      />
      <div className="mt-1.5 text-xs flex justify-between items-center">
        <span>갠플해요</span>
        <span>친해져요</span>
      </div>
    </>
  );
};

export default memo(TendencySliderRange);

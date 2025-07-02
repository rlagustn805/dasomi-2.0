import { Slider } from '@/components/ui/slider';
import { memo } from 'react';

interface TendencySliderProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

const TendencySlider = ({ value, onChange }: TendencySliderProps) => {
  return (
    <>
      <Slider
        value={[value!]}
        max={5}
        step={1}
        onValueChange={([val]) => onChange(val)}
        mode="single"
      />
      <div className="mt-1.5 text-xs flex justify-between items-center">
        <span>갠플해요 </span>
        <span>친해져요</span>
      </div>
    </>
  );
};

export default memo(TendencySlider);

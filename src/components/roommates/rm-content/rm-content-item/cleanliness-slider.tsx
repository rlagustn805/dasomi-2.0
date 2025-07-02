import { Slider } from '@/components/ui/slider';
import { memo } from 'react';

interface CleanlinessSliderProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

const CleanlinessSlider = ({ value, onChange }: CleanlinessSliderProps) => {
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
        <span>자유로워요</span>
        <span>신경쓰는 편이에요</span>
      </div>
    </>
  );
};

export default memo(CleanlinessSlider);

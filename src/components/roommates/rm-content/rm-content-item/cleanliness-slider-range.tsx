import { Slider } from '@/components/ui/slider';

interface CleanlinessRangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const CleanlinessSliderRange = ({
  value,
  onChange,
}: CleanlinessRangeSliderProps) => {
  return (
    <>
      <Slider
        value={value}
        max={5}
        step={1}
        minStepsBetweenThumbs={1} // 겹치지 않게
        onValueChange={(val: [number, number]) => onChange(val)}
      />
      <div className="text-xs flex justify-between items-center">
        <span>자유로워요</span>
        <span>신경쓰는 편이에요</span>
      </div>
    </>
  );
};

export default CleanlinessSliderRange;

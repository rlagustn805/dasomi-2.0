import { Slider } from '@/components/ui/slider';

interface TendencyRangeSliderProps {
  value: [number, number]; // 최소/최대 범위 값
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
      <div className="text-xs flex justify-between items-center">
        <span>갠플해요</span>
        <span>친해져요</span>
      </div>
    </>
  );
};

export default TendencySliderRange;

import { Slider } from '@/components/ui/slider';

const TendencySlider = () => {
  return (
    <>
      <Slider defaultValue={[3]} max={5} step={1} />
      <div className="text-xs flex justify-between items-center">
        <span>갠플해요 </span>
        <span>친해져요</span>
      </div>
    </>
  );
};

export default TendencySlider;

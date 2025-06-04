import { Slider } from '@/components/ui/slider';

const CleanlinessSlider = () => {
  return (
    <>
      <Slider defaultValue={[3]} max={5} step={1} />
      <div className="text-xs flex justify-between items-center">
        <span>자유로워요</span>
        <span>신경쓰는 편이에요</span>
      </div>
    </>
  );
};

export default CleanlinessSlider;

import { Switch } from '@/components/ui/switch';

const SmokingSwitch = () => {
  return (
    <div className="flex justify-between items-center">
      <p>흡연</p>
      <Switch />
    </div>
  );
};

export default SmokingSwitch;

import { Switch } from '@/components/ui/switch';

const EatingSwitch = () => {
  return (
    <div className="flex justify-between items-center">
      <p>실내 취식</p>
      <Switch />
    </div>
  );
};

export default EatingSwitch;

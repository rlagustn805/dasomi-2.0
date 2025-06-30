import { Switch } from '@/components/ui/switch';
import { memo } from 'react';

interface EatingSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const EatingSwitch = ({ value, onChange }: EatingSwitchProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>실내 취식</p>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  );
};

export default memo(EatingSwitch);

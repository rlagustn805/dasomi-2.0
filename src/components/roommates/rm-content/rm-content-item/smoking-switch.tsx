import { Switch } from '@/components/ui/switch';
import { memo } from 'react';

interface SmokingSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const SmokingSwitch = ({ value, onChange }: SmokingSwitchProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>흡연</p>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  );
};

export default memo(SmokingSwitch);

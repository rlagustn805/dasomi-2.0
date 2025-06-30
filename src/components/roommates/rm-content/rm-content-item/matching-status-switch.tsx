import { Switch } from '@/components/ui/switch';
import { memo } from 'react';

interface MatchingStatusSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const MatchingStatusSwitch = ({
  value,
  onChange,
}: MatchingStatusSwitchProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>매칭 가능</p>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  );
};

export default memo(MatchingStatusSwitch);

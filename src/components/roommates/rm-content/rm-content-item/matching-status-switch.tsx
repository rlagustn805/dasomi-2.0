import { Switch } from '@/components/ui/switch';
import { memo } from 'react';

interface MatchingStatusSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

const MatchingStatusSwitch = ({
  value,
  onChange,
  label = '매칭 가능한 사람만 보기',
}: MatchingStatusSwitchProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>{label}</p>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  );
};

export default memo(MatchingStatusSwitch);

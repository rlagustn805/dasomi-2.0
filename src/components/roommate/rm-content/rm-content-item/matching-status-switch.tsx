import { Switch } from '@/components/ui/switch';

interface MatchingStatusSwitchProps {
  value: string | boolean | undefined;
  onChange: (value: boolean) => void;
}

const MatchingStatusSwitch = ({
  value,
  onChange,
}: MatchingStatusSwitchProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>매칭 가능</p>
      {typeof value === 'boolean' && (
        <Switch checked={value} onCheckedChange={onChange} />
      )}
    </div>
  );
};

export default MatchingStatusSwitch;

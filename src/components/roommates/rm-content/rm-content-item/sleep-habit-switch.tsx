import { Switch } from '@/components/ui/switch';

interface SleepHabitSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const SleepHabitSwitch = ({ value, onChange }: SleepHabitSwitchProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>잠버릇 있어요</p>
      {typeof value === 'boolean' && (
        <Switch checked={value} onCheckedChange={onChange} />
      )}
    </div>
  );
};

export default SleepHabitSwitch;

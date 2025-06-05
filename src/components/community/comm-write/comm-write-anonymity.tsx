import { Switch } from '@/components/ui/switch';

const CommWriteAnonymity = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <p className="text-sm font-semibold">익명</p>
      <Switch />
    </div>
  );
};

export default CommWriteAnonymity;

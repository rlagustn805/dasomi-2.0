import RmContent from '../rm-content';
import { Card } from '@/components/ui/card';

const DesktopRmFilter = () => {
  return (
    <Card className="col-span-1 lg:mt-15 sticky top-20 h-fit hidden lg:block">
      <RmContent label="필터 설정" />
    </Card>
  );
};

export default DesktopRmFilter;

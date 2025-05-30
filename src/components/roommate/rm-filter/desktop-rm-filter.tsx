import RmFilterContent from './rm-filter-content';
import { Card } from '@/components/ui/card';

const DesktopRmFilter = () => {
  return (
    <Card className="col-span-1 lg:mt-15 sticky top-20 h-fit hidden lg:block">
      <RmFilterContent />
    </Card>
  );
};

export default DesktopRmFilter;

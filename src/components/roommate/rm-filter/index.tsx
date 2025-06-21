import DesktopRmFilter from './desktop-rm-filter';
import MobileRmFilter from './mobile-rm-filter';
import { RoommateFilterProps } from '@/types/roommates';

const RmFilter = ({ filters }: RoommateFilterProps) => (
  <>
    <DesktopRmFilter filters={filters} />
    <MobileRmFilter filters={filters} />
  </>
);

export default RmFilter;

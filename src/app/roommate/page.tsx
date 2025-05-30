import RmFilter from '@/components/roommate/rm-filter';
import RmHeader from '@/components/roommate/rm-header';
import RmList from '@/components/roommate/rm-list';

const RoomMatePage = () => {
  return (
    <div className="mt-8 px-4 md:px-10 lg:px-20">
      <RmHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <RmFilter />
        <RmList />
      </div>
    </div>
  );
};

export default RoomMatePage;

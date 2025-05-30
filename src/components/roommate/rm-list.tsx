import { roommates } from './rm-mockdata';
import RmCard from './rm-card';
import RmPagination from './rm-pagination';

const RmList = () => {
  return (
    <div className="lg:mt-15 flex flex-col gap-5 col-span-1 lg:col-span-3">
      {roommates.map(user => (
        <RmCard key={user.id} {...user} />
      ))}
      <RmPagination />
    </div>
  );
};

export default RmList;

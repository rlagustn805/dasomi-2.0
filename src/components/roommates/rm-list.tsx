import RmCard from './rm-card';
import RmPagination from './rm-pagination';
import { RoommateListProps } from '@/types/roommates';

const RmList = async ({
  page,
  searchParams,
  roommates,
  total,
}: RoommateListProps) => {
  if (!roommates || roommates.length === 0) {
    return (
      <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-10 text-gray-500">
        해당 페이지에 룸메이트가 없습니다.
      </div>
    );
  }

  const currentSearchParams = new URLSearchParams();
  Object.entries(searchParams || {}).forEach(([key, value]) => {
    if (typeof value === 'string' && key !== 'page') {
      currentSearchParams.append(key, value);
    }
  });
  const basePath = `/roommates?${currentSearchParams.toString()}`;
  return (
    <div className="lg:mt-15 flex flex-col gap-5 col-span-1 lg:col-span-3">
      {roommates.map(roommate => (
        <RmCard key={roommate.id} {...roommate} />
      ))}
      <RmPagination
        total={total}
        pageSize={10}
        currentPage={page}
        basePath={basePath}
      />
    </div>
  );
};

export default RmList;

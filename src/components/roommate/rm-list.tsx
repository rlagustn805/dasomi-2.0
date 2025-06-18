import { roommates } from './rm-mockdata';
import RmCard from './rm-card';
import RmPagination from './rm-pagination';

const RmList = async ({ dormitory, page }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates?dormitory=${dormitory}&page=${page}&pageSize=10}`
  );

  const { data, total } = await res.json();

  const basePath = `/roommate/${dormitory === 'all' ? 'all' : dormitory}`;

  if (!data || data.length === 0) {
    return (
      <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-10 text-gray-500">
        해당 페이지에 룸메이트가 없습니다.
      </div>
    );
  }

  return (
    <div className="lg:mt-15 flex flex-col gap-5 col-span-1 lg:col-span-3">
      {data.map(roommate => (
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

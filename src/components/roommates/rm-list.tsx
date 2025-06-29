import { fetchRoommateList } from '@/services/api-roommates/api-roommates-server';
import RmCard from './rm-card';
import RmPagination from './rm-pagination';
import { RoommateListProps } from '@/types/roommates';
import { RoommateCardData } from '@/types/roommates';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Card } from '../ui/card';

type isUser = {
  currentUserId: string | null;
  currentUserGender: string | null;
};

const RmList = async ({
  page,
  searchParams,
  currentUserId,
  currentUserGender,
}: RoommateListProps & isUser) => {
  const { data, total } = await fetchRoommateList(searchParams);

  if (!data || data.length === 0) {
    return (
      <Card className="col-span-1 lg:col-span-3 flex flex-col items-center mt-8 text-gray-500">
        <div className="flex flex-col items-center justify-center gap-5 h-full">
          <p className="">등록된 룸메이트가 아직 존재하지 않아요.</p>
          <Link href="/roommates/dashboard">
            <Button size="sm">내 룸메이트 정보 등록하기</Button>
          </Link>
        </div>
      </Card>
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
    <div className="col-span-1 lg:col-span-3">
      <div className="flex lg:justify-end mb-2">
        <span>총 {total}개</span>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-5">
          {data.map((roommate: RoommateCardData) => (
            <RmCard
              key={roommate.roommateId}
              {...roommate}
              currentUserId={currentUserId}
              currentUserGender={currentUserGender}
            />
          ))}
        </div>
        <RmPagination
          total={total}
          pageSize={10}
          currentPage={page}
          basePath={basePath}
        />
      </div>
    </div>
  );
};

export default RmList;

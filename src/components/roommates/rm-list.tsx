import { fetchRoommateList } from '@/services/api-roommates/api-roommates-server';
import RmCard from './rm-card';
import RmPagination from './rm-pagination';
import { RoommateListProps } from '@/types/roommates';
import { RoommateCardData } from '@/types/roommates';
import { Card } from '../ui/card';
import { BookText } from 'lucide-react';

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
        <div className="flex flex-col items-center justify-center gap-5 h-full leading-7">
          <div className="inline-block mb-2">
            <BookText size={60} color="#dee2e6" />
          </div>
          등록된 룸메이트가 존재하지 않아요. <br />
          상단에 룸메이트 정보 등록하기를 통해 <br />
          프로필을 만들 수 있어요.
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

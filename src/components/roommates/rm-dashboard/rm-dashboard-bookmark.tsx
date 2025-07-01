import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { fetchLikedRoommateList } from '@/services/api-roommates/api-roommates-server';
import RmCard from '../rm-card';
import { RoommateCardData } from '@/types/roommates';
import RmDashboardPagination from './rm-dashboard-pagination';
import { Heart } from 'lucide-react';

const RmDashboardBookmark = async ({ page }: { page: number }) => {
  const { data, total, currentUserId, currentUserGender, pageSize } =
    await fetchLikedRoommateList({ page });

  const totalPages = Math.ceil(total / pageSize);

  if (!data || data.length === 0) {
    return (
      <Card className="min-h-32">
        <CardContent>
          <div className="text-center">
            <div className="inline-block mb-2">
              <Heart size={60} color="#dee2e6" fill="#dee2e6" />
            </div>
            <p>아직 등록한 찜한 룸메이트가 없어요!</p>
            <p>룸메이트 리스트에서 하트를 클릭하면</p>
            <p>추가할 수 있어요.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">찜한 룸메이트</CardTitle>
          <span>총 {total}개</span>
        </div>
        <CardDescription>
          찜한 룸메이트를 관리하려면 하트를 클릭하면 돼요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-10">
        {data.map((roommate: RoommateCardData) => (
          <RmCard
            key={roommate.roommateId}
            {...roommate}
            currentUserGender={currentUserGender}
            currentUserId={currentUserId}
          />
        ))}

        <RmDashboardPagination
          currentPage={page}
          totalPages={totalPages}
          pageParamName="bookmarkPage"
        />
      </CardContent>
    </Card>
  );
};

export default RmDashboardBookmark;

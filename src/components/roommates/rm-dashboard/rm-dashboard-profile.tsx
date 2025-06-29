import { Card, CardContent } from '@/components/ui/card';
import RmEditForm from '../rm-content/form/rm-edit-form';
import { fetchRoommateProfile } from '@/services/api-roommates/api-roommates-server';
import RmDashboardPagination from '@/components/roommates/rm-dashboard/rm-dashboard-pagination';

const RmDashboardProfile = async ({ page }: { page: number }) => {
  const { data, total, pageSize } = await fetchRoommateProfile({ page });

  const totalPages = Math.ceil(total / pageSize);

  if (!data || data.length === 0) {
    return (
      <Card className="min-h-32">
        <CardContent>
          <div className="text-center">
            <p>아직 등록한 룸메이트 프로필 정보가 없어요!</p>
            <p>프로필 등록 탭에서 등록할 수 있어요.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <RmEditForm profiles={data} />
      <RmDashboardPagination
        currentPage={page}
        totalPages={totalPages}
        pageParamName="profilePage"
      />
    </Card>
  );
};

export default RmDashboardProfile;

import { Card } from '@/components/ui/card';
import RmEditForm from '../rm-content/form/rm-edit-form';
import { fetchRoommateProfile } from '@/services/api-roommates/api-roommates-server';
import RmDashboardPagination from '@/components/roommates/rm-dashboard/rm-dashboard-pagination';

const RmDashboardProfile = async ({ page }: { page: number }) => {
  const { data, total, pageSize } = await fetchRoommateProfile({ page });

  const totalPages = Math.ceil(total / pageSize);

  return (
    <Card className="">
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

import RmFilter from '@/components/roommates/rm-filter';
import RmHeader from '@/components/roommates/rm-header';
import RmList from '@/components/roommates/rm-list';
import { fetchRoommateList } from '@/services/api-roommates/api-roommates-client';
import { fetchUserProfile } from '@/services/api-users/api-users-server';

type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const RoommatePage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const pageNum = parseInt(params.page ?? '1', 10);

  const { data, total, filters } = await fetchRoommateList(params);
  const user = await fetchUserProfile();

  let currentUserId = null;
  let currentUserGender = null;

  if (!user.error) {
    currentUserId = user.id;
    currentUserGender = user.gender;
  }

  return (
    <div className="mt-8 px-4 md:px-36 lg:px-44">
      <RmHeader />
      <div className="flex my-3 lg:justify-end">
        <span>총 {total}개</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <RmFilter {...filters} />
        <RmList
          page={pageNum}
          searchParams={params}
          roommates={data}
          total={total}
          currentUserId={currentUserId}
          currentUserGender={currentUserGender}
        />
      </div>
    </div>
  );
};

export default RoommatePage;

import RmFilter from '@/components/roommates/rm-filter';
import RmHeader from '@/components/roommates/rm-header';
import RmList from '@/components/roommates/rm-list';
import RmListLoading from '@/components/roommates/rm-list-loading';
import { fetchRoommateFilters } from '@/services/api-roommates/api-roommates-server';
import { fetchUserProfile } from '@/services/api-users/api-users-server';
import { Suspense } from 'react';

export const metadata = {
  title: '다솜이 룸메이트 서비스 | 리스트',
  description: '룸메이트 리스트 안내',
  icons: {
    icon: '/images/favicon.ico',
  },
};

type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const RoommatePage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const pageNum = parseInt(params.page ?? '1', 10);

  const key = Object.entries(params)
    .sort()
    .map(([k, v]) => `${k}=${v}`)
    .join('&');

  const user = await fetchUserProfile();

  const filters = await fetchRoommateFilters(params);

  let currentUserId = null;
  let currentUserGender = null;

  if (!user.error) {
    currentUserId = user.id;
    currentUserGender = user.gender;
  }
  return (
    <div className="mt-8 px-4 md:px-36 lg:px-44">
      <RmHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-5">
        <RmFilter {...filters} />

        <Suspense key={key} fallback={<RmListLoading />}>
          <RmList
            page={pageNum}
            searchParams={params}
            currentUserId={currentUserId}
            currentUserGender={currentUserGender}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default RoommatePage;

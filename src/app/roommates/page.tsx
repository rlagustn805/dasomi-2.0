import RmFilter from '@/components/roommates/rm-filter';
import RmHeader from '@/components/roommates/rm-header';
import RmList from '@/components/roommates/rm-list';
import { fetchRoommateList } from '@/services/api-roommates/api-roommates-client';

type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const RoommatePage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const pageNum = parseInt(params.page ?? '1', 10);

  const { data, total, filters } = await fetchRoommateList(params);

  return (
    <div className="mt-8 px-4 md:px-36 lg:px-44">
      <RmHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <RmFilter {...filters} />
        <RmList
          page={pageNum}
          searchParams={params}
          roommates={data}
          total={total}
        />
      </div>
    </div>
  );
};

export default RoommatePage;

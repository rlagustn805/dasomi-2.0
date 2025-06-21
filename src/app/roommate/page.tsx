import RmFilter from '@/components/roommate/rm-filter';
import RmHeader from '@/components/roommate/rm-header';
import RmList from '@/components/roommate/rm-list';
import { fetchRoommateList } from '@/services/api-roommates/api-roommates-client';

type Props = {
  params: Promise<{ dormitory: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const RoomMatePage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const pageNum = parseInt(params.page ?? '1', 10);

  const { data, total, filters } = await fetchRoommateList(params);

  return (
    <div className="mt-8 px-4 md:px-36 lg:px-44">
      <RmHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <RmFilter filters={filters} />
        <RmList
          page={pageNum}
          searchParams={params}
          data={data}
          total={total}
        />
      </div>
    </div>
  );
};

export default RoomMatePage;

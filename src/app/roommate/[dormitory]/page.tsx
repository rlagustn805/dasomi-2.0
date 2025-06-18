import RmFilter from '@/components/roommate/rm-filter';
import RmHeader from '@/components/roommate/rm-header';
import RmList from '@/components/roommate/rm-list';

type Props = {
  params: Promise<{ dormitory: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const RoomMatePage = async ({ params, searchParams }: Props) => {
  const { dormitory } = await params;
  const { page } = await searchParams;

  const pageNum = parseInt(page ?? '1', 10);

  return (
    <div className="mt-8 px-4 md:px-36 lg:px-44">
      <RmHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <RmFilter />
        <RmList dormitory={dormitory || 'all'} page={pageNum} />
      </div>
    </div>
  );
};

export default RoomMatePage;

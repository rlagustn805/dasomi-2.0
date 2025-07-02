import CmMultiMbtiSelect from '@/components/common/cm-mbti/cm-multi-mbti-select';
import RmDashboardBookmark from '@/components/roommates/rm-dashboard/rm-dashboard-bookmark';
import RmDashboardCreate from '@/components/roommates/rm-dashboard/rm-dashboard-create';
import RmDashboardProfile from '@/components/roommates/rm-dashboard/rm-dashboard-profile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const RoommateDashBoardPage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const profilePage = parseInt(params.profilePage ?? '1', 10);
  const bookmarkPage = parseInt(params.bookmarkPage ?? '1', 10);
  const currentTab = params.tab ?? 'create-roommate';

  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">룸메이트 대시보드</h2>
      <p className="text-sm text-muted-foreground">
        룸메이트를 모집하는 게시글을 등록하고, 찜한 룸메이트를 확인할 수 있어요.
      </p>
      <Tabs defaultValue={currentTab} className="mt-5 space-y-6">
        <TabsList className="grid grid-cols-3 w-full h-auto">
          <TabsTrigger
            value="create-roommate"
            className="py-2 md:py-1.5 cursor-pointer">
            룸메 모집 글 등록
          </TabsTrigger>
          <TabsTrigger
            value="profile-roommate"
            className="py-2 md:py-1.5 cursor-pointer">
            등록한 모집 글
          </TabsTrigger>
          <TabsTrigger
            value="bookmark-roommate"
            className="py-2 md:py-1.5 cursor-pointer">
            찜한 룸메이트
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create-roommate">
          <RmDashboardCreate />
        </TabsContent>
        <TabsContent value="profile-roommate">
          <RmDashboardProfile page={profilePage} />
        </TabsContent>
        <TabsContent value="bookmark-roommate">
          <RmDashboardBookmark page={bookmarkPage} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RoommateDashBoardPage;

import RmDashboardBookmark from '@/components/roommate/rm-dashboard/rm-dashboard-bookmark';
import RmDashboardCreate from '@/components/roommate/rm-dashboard/rm-dashboard-create';
import RmDashboardProfile from '@/components/roommate/rm-dashboard/rm-dashboard-profile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RoomMateDashBoardPage = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">룸메이트 대시보드</h2>
      <p className="text-sm text-gray-400">
        룸메이트를 등록, 관리하고 찜한 룸메이트를 확인할 수 있어요.
      </p>
      <Tabs defaultValue="create-roommate" className="mt-5 space-y-6">
        <TabsList className="grid grid-cols-3 w-full h-auto">
          <TabsTrigger
            value="create-roommate"
            className="py-2 md:py-1.5 cursor-pointer">
            프로필 등록
          </TabsTrigger>
          <TabsTrigger
            value="profile-roommate"
            className="py-2 md:py-1.5 cursor-pointer">
            등록한 프로필
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
          <RmDashboardProfile />
        </TabsContent>
        <TabsContent value="bookmark-roommate">
          <RmDashboardBookmark />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RoomMateDashBoardPage;

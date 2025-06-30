import MobileDescription from '@/components/description/mobile-description';
import ProfileDescription from '@/components/description/profile-description';
import RoommateDescription from '@/components/description/roommate-description';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const dynamic = 'force-static';

const DescriptionPage = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">이용안내</h2>
      <p className="text-sm text-gray-400">
        프로필 수정 방법, 룸메이트 등록, 모바일 이용 방법 등을 안내 해드려요.
      </p>

      <Tabs defaultValue="profile-description" className="mt-5 space-y-6">
        <TabsList className="grid grid-cols-3 w-full h-auto">
          <TabsTrigger
            value="profile-description"
            className="py-2 md:py-1.5 cursor-pointer">
            프로필
          </TabsTrigger>
          <TabsTrigger
            value="roommate-description"
            className="py-2 md:py-1.5 cursor-pointer">
            룸메이트
          </TabsTrigger>
          <TabsTrigger
            value="mobile-description"
            className="py-2 md:py-1.5 cursor-pointer">
            모바일
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile-description">
          <ProfileDescription />
        </TabsContent>
        <TabsContent value="roommate-description">
          <RoommateDescription />
        </TabsContent>
        <TabsContent value="mobile-description">
          <MobileDescription />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DescriptionPage;

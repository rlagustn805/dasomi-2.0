import ProfileDescription from '@/components/description/profile-description';
import RoommateDescription from '@/components/description/roommate-description';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: '다솜이 룸메이트 서비스 | 이용안내',
  description: '프로필 등록, 룸메이트 등록 등 전반적인 이용 안내',
};

const DescriptionPage = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">이용안내</h2>
      <p className="text-sm text-muted-foreground">
        프로필 수정 방법, 룸메이트 등록, 모바일 이용 방법 등을 안내 해드려요.
      </p>

      <Tabs defaultValue="profile-description" className="mt-5 space-y-6">
        <TabsList className="grid grid-cols-2 w-full h-auto">
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
        </TabsList>
        <TabsContent value="profile-description">
          <ProfileDescription />
        </TabsContent>
        <TabsContent value="roommate-description">
          <RoommateDescription />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DescriptionPage;

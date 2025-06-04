import ProfileAccount from '@/components/profile/profile-account';
import ProfileInfo from '@/components/profile/profile-info';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Profile = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">마이페이지</h2>
      <p className="text-sm text-gray-400">
        내 정보를 관리하고 찜한 룸메이트를 확인할 수 있어요.
      </p>
      <Tabs defaultValue="profile-info" className="mt-5 space-y-6 md:space-y-8">
        <TabsList className="grid grid-cols-2 w-full h-auto">
          <TabsTrigger
            value="profile-info"
            className="py-2 md:py-1.5 cursor-pointer">
            내 정보
          </TabsTrigger>
          <TabsTrigger
            value="profile-account"
            className="py-2 md:py-1.5 cursor-pointer">
            계정 설정
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile-info">
          <ProfileInfo />
        </TabsContent>

        <TabsContent value="profile-account">
          <ProfileAccount />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;

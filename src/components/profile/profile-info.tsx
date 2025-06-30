import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ProfileNickname from './profile-nickname';
import ProfileDepartment from './profile-department';
import ProfileMbti from './profile-mbti';
import ProfileAccountWithdraw from './profile-withdraw';
import { fetchUserProfile } from '@/services/api-users/api-users-server';

const ProfileInfo = async () => {
  const userProfile = await fetchUserProfile();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>내 정보</CardTitle>
          <CardDescription>
            내 프로필 정보를 확인하고 수정할 수 있어요.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <ProfileNickname value={userProfile.nickname} />
          <ProfileDepartment value={userProfile.department} />
          <ProfileMbti value={userProfile.mbti} />
        </CardContent>

        <CardFooter>
          <ProfileAccountWithdraw />
        </CardFooter>
      </Card>
    </>
  );
};

export default ProfileInfo;

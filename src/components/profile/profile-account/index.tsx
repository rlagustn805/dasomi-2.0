import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ProfileAccountChangePassword from './profile-account-change-password';
import ProfileAccountWithdraw from './profile-account-withdraw';

const ProfileAccount = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          계정 설정
          <CardDescription>
            계정 관련 설정을 변경할 수 있습니다.
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <ProfileAccountChangePassword />
      <ProfileAccountWithdraw />
    </Card>
  );
};

export default ProfileAccount;

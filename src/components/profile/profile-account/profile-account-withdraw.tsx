import { Button } from '@/components/ui/button';
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ProfileAccountWithdraw = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-red-600">
          계정 탈퇴
          <CardDescription>
            계정을 탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다.
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Button size="sm" variant="destructive">
          계정 탈퇴
        </Button>
      </CardFooter>
    </>
  );
};

export default ProfileAccountWithdraw;

import CmFilterField from '../common/cm-filter-field';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import CmDepartment from '../common/cm-department';
import CmMbti from '../common/cm-mbti';
import { Button } from '../ui/button';

const ProfileInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>내 정보</CardTitle>
        <CardDescription>
          내 프로필 정보를 확인하고 수정할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <CmFilterField label="닉네임">
          <Input className="w-[200px]" />
        </CmFilterField>
        <CmFilterField label="학과">
          <CmDepartment />
        </CmFilterField>

        <CmFilterField label="MBTI">
          <CmMbti />
        </CmFilterField>
      </CardContent>

      <CardFooter>
        <Button size="sm">정보수정</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileInfo;

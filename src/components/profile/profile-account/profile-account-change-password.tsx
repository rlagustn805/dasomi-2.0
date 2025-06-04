import { CardContent, CardFooter } from '@/components/ui/card';

import CmFilterField from '@/components/common/cm-filter-field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ProfileAccountChangePassword = () => {
  return (
    <>
      <CardContent className="flex flex-col gap-3 max-w-[300px]">
        <CmFilterField label="비밀번호 변경">
          <Input placeholder="새 비밀번호 변경" />
        </CmFilterField>
        <CmFilterField label="비밀번호 확인">
          <Input placeholder="새 비밀번호 확인" />
        </CmFilterField>
      </CardContent>
      <CardFooter>
        <Button size="sm">비밀번호 변경</Button>
      </CardFooter>
    </>
  );
};

export default ProfileAccountChangePassword;

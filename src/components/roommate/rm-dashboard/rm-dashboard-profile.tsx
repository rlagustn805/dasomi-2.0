import RmCard from '@/components/roommate/rm-card';
import { roommates } from '@/components/roommate/rm-mockdata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RmDashboardProfile = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-lg">내 룸메이트 지원 프로필</CardTitle>
      </CardHeader>
      <CardContent className="space-y-10">
        {roommates.map(user => (
          <RmCard key={user.id} {...user} />
        ))}
      </CardContent>
    </Card>
  );
};

export default RmDashboardProfile;

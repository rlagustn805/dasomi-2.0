import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RmDashboardBookmark = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">찜한 룸메이트</CardTitle>
      </CardHeader>
      <CardContent className="space-y-10">
        {/* {roommates.map(user => (
          <RmCard key={user.id} {...user} />
        ))} */}
      </CardContent>
    </Card>
  );
};

export default RmDashboardBookmark;

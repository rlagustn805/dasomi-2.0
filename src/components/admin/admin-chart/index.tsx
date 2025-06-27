import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import MatchingStatusChart from './chart-item/matching-status-chart';
import TotalUserChart from './chart-item/total-user-chart';

const AdminChart = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5">
      <Card>
        <CardHeader>
          <CardTitle>가입 / 탈퇴율</CardTitle>
        </CardHeader>
        <CardContent>
          <TotalUserChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>매칭 상태</CardTitle>
        </CardHeader>
        <CardContent>
          <MatchingStatusChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminChart;

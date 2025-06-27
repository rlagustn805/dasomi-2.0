import AdminChart from '@/components/admin/admin-chart';

const AdminPage = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">관리자 대시보드</h2>
      <p className="text-sm text-gray-400">유저 및 매칭률 통계</p>
      <AdminChart />
    </div>
  );
};

export default AdminPage;

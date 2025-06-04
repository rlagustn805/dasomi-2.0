import CommDetail from '@/components/community/comm-detail';
import CommDetailHeader from '@/components/community/comm-detail/comm-detail-header';

const CommunityDetailPage = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 mt-15">
      <CommDetailHeader />
      <CommDetail />
    </div>
  );
};

export default CommunityDetailPage;

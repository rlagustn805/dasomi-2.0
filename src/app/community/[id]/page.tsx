import CommDetail from '@/components/community/comm-detail';
import CommDetailHeader from '@/components/community/comm-detail/comm-detail-header';

const CommunityDetailPage = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <CommDetailHeader />
      <CommDetail />
    </div>
  );
};

export default CommunityDetailPage;

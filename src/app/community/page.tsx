import CommHeader from '@/components/community/comm-header';
import CommList from '@/components/community/comm-list';
import CommPagination from '@/components/community/comm-pagination';
import CommSearchBar from '@/components/community/comm-searchbar';

const CommunityPage = () => {
  return (
    <div className="mt-8 px-4 md:px-36 lg:px-44">
      <CommHeader />
      <div className="flex flex-col gap-2 mt-5">
        <CommSearchBar />
        <CommList />
      </div>
      <CommPagination />
    </div>
  );
};

export default CommunityPage;

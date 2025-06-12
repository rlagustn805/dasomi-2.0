import ProfileInfo from '@/components/profile/profile-info';

const Profile = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">마이페이지</h2>
      <p className="text-sm text-gray-400">
        내 정보를 관리하고 찜한 룸메이트를 확인할 수 있어요.
      </p>
      <div className="mt-10">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;

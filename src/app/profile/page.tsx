import ProfileInfo from '@/components/profile/profile-info';

export const dynamic = 'force-dynamic';

const Profile = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <ProfileInfo />
    </div>
  );
};

export default Profile;

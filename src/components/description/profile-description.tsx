import Image from 'next/image';

const profileDescriptionArr = [
  {
    src: '/images/description/profile/1.png',
    alt: 'profile-description1',
  },
  {
    src: '/images/description/profile/2.png',
    alt: 'profile-description2',
  },
  {
    src: '/images/description/profile/3.png',
    alt: 'profile-description3',
  },
  {
    src: '/images/description/profile/4.png',
    alt: 'profile-description4',
  },
  {
    src: '/images/description/profile/5.png',
    alt: 'profile-description5',
  },
];

const ProfileDescription = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {profileDescriptionArr.map(p => (
        <Image
          key={p.src}
          className="border border-muted-foreground/30 rounded-2xl p-2"
          src={p.src}
          width={500}
          height={500}
          alt="profile-description1"
          priority
        />
      ))}
    </div>
  );
};

export default ProfileDescription;

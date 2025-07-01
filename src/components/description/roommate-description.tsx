import Image from 'next/image';
import ImgWithPlaceholder from '../img-with-placeholder';

const roommateDescriptionArr = [
  {
    src: '/images/description/roommate/1.png',
    alt: 'roommate-description1',
  },
  {
    src: '/images/description/roommate/2.png',
    alt: 'roommate-description2',
  },
  {
    src: '/images/description/roommate/3.png',
    alt: 'roommate-description3',
  },
  {
    src: '/images/description/roommate/4.png',
    alt: 'roommate-description4',
  },
];

const ProfileDescription = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {roommateDescriptionArr.map(p => (
        <div key={p.src}>
          <ImgWithPlaceholder
            key={p.src}
            className="border border-muted-foreground/30 rounded-2xl p-2"
            src={p.src}
            width={500}
            height={500}
            alt="roommate-description1"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileDescription;

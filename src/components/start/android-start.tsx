import Image from 'next/image';

const androidImgArr = [
  {
    src: '/images/start/android/1.png',
    alt: 'android-start1',
  },
  {
    src: '/images/start/android/2.png',
    alt: 'android-start2',
  },
  {
    src: '/images/start/android/3.png',
    alt: 'android-start3',
  },
];

const AndroidStart = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {androidImgArr.map(p => (
        <Image
          key={p.src}
          className="border border-muted-foreground/30 rounded-2xl p-2"
          src={p.src}
          width={500}
          height={500}
          alt="android-start-1"
          priority
        />
      ))}
    </div>
  );
};

export default AndroidStart;

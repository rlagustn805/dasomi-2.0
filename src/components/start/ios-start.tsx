import Image from 'next/image';

const iosImgArr = [
  {
    src: '/images/start/ios/1.png',
    alt: 'ios-start1',
  },
  {
    src: '/images/start/ios/2.png',
    alt: 'ios-start2',
  },
  {
    src: '/images/start/ios/3.png',
    alt: 'ios-start3',
  },
  {
    src: '/images/start/ios/4.png',
    alt: 'ios-start4',
  },
];

const IosStart = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {iosImgArr.map(p => (
        <Image
          key={p.src}
          className="border border-muted-foreground/30 rounded-2xl p-2"
          src={p.src}
          width={500}
          height={500}
          alt="ios-start-1"
          priority
        />
      ))}
    </div>
  );
};

export default IosStart;

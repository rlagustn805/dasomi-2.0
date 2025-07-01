import getBase64 from '@/utils/get-base-64';
import Image from 'next/image';

interface ImgWithPlaceholderProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

const ImgWithPlaceholder = async ({
  src,
  alt = src,
  className,
  width,
  height,
}: ImgWithPlaceholderProps) => {
  const { base64, img } = await getBase64(src);

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? img.width}
      height={height ?? img.height}
      className={className}
      placeholder="blur"
      blurDataURL={base64}
      priority
    />
  );
};

export default ImgWithPlaceholder;

import KakaoIcon from '@/assets/icon/kakao-icon';
import Link from 'next/link';
import { RoomMateProfileType } from '@/types/roommates';

const RmCardContact = ({ kakaoOpenLink }: { kakaoOpenLink: string }) => {
  return (
    <div className="text-sm text-right pt-4  border-t border-gray-200">
      <Link
        href={kakaoOpenLink}
        target="_blank"
        className="inline-flex items-center gap-1 bg-yellow-400 rounded-xl px-2 py-1 text-sm">
        <KakaoIcon width={20} height={20} />
        <span className="text-xs">연락하기</span>
      </Link>
    </div>
  );
};

export default RmCardContact;

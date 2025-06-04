import Link from 'next/link';
import { footerLinks } from './footer-link';
import KakaoIcon from '@/assets/icon/kakao-icon';
import { buttonVariants } from '../ui/button';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-100 px-4 md:px-36 lg:px-44 mt-15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <p className="font-semibold mb-3">다솜이</p>
          <p className="text-sm text-gray-400">
            기숙사 생활을 더 편리하게 만들어주는 서비스입니다.
          </p>
        </div>

        {footerLinks.map(section => (
          <div key={section.title}>
            <p className="font-semibold mb-3">{section.title}</p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              {section.links.map(link => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <p className="font-semibold mb-3">문의</p>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: 'outline',
            })} bg-yellow-400 rounded-xl`}>
            <KakaoIcon />
            문의하기
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

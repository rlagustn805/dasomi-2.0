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
          <p className="text-sm text-muted-foreground">
            원하는 룸메이트를 쉽게 찾고 구하는 서비스에요.
          </p>
        </div>

        {footerLinks.map(section => (
          <div key={section.title}>
            <p className="font-semibold mb-3">{section.title}</p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
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
            개발자 문의
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

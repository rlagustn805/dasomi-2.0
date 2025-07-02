import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from 'sonner';
import AppInit from '@/components/app-init';
import AppInstallPrompt from '@/components/app-install-prompt';

export const metadata = {
  title: '다솜이 룸메이트 서비스',
  description: '나와 맞는 기숙사 룸메이트를 손쉽게 구하다.',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/icons/icon512_rounded.png',
      type: 'image/png',
      sizes: '512x512',
    },
    {
      rel: 'apple-touch-icon',
      url: '/icons/icon512_rounded.png',
    },
    {
      rel: 'mask-icon',
      url: '/icons/icon512_maskable.png',
      color: '#ffffff',
    },
  ],
  appleWebApp: {
    title: '다솜이',
    capable: true,
    statusBarStyle: 'default',
  },
  applicationName: '다솜이',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

const pretendard = localFont({
  src: '../../src/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-CSS-pretendard',
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="kr"
      className={`${pretendard.variable} font-pretendard overscroll-none`}>
      <body className="flex flex-col min-h-screen ">
        <AppInit />
        <AppInstallPrompt />

        <Header />
        <Toaster richColors position="top-center" />
        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

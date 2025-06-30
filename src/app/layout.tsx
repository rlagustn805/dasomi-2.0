import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Toaster } from 'sonner';

export const metadata = {
  title: '다솜이 룸메이트 서비스',
  description: '맞춤형 기숙사 룸메이트를 손쉽게 구하다.',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#ffffff',
  },
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

const pretendard = localFont({
  src: '../../src/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-CSS-pretendard',
});

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let loginUser = null;

  if (user) {
    const { data: userProfile, error } = await supabase
      .from('users')
      .select('id, nickname, gender')
      .eq('id', user.id)
      .maybeSingle();

    if (error) {
      console.error(error.message);
    }
    loginUser = userProfile ?? null;
  }

  return (
    <html
      lang="kr"
      className={`${pretendard.variable} font-pretendard overscroll-none`}>
      <body className="flex flex-col min-h-screen ">
        <Header nickname={loginUser?.nickname} />
        <Toaster richColors position="top-center" />
        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

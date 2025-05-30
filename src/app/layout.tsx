import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
    <html lang="kr" className={`${pretendard.variable} font-pretendard`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

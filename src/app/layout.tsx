import React from 'react';
import './globals.css';
import localFont from 'next/font/local';

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

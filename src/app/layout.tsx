import type { Metadata } from 'next';
import React from 'react';
import Header from '@/sections/header';

export const metadata: Metadata = {
  title: '백엔드 개발자 조가람입니다.',
  description: '백엔드 개발자 조가람의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

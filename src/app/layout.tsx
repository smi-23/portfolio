import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '개발자 조가람입니다.',
  description: '개발자 조가람의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/reset.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '최지윤의 이력서',
  description: '지금까지의 이력을 나타낸 이력서입니다.',
  keywords: 'Resume Page',
  publisher: '최지윤',
  creator: '최지윤',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

import { siteUrl } from '../lib/site';
import type { Metadata } from 'next';
import './globals.css';
import BackToTop from '../components/back-to-top';
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Nick Studio — รับทำเว็บไซต์สำหรับธุรกิจ',
    template: '%s | Nick Studio',
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    siteName: 'Nick Studio',
    description:
      'ออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจ พร้อมบริการแก้บั๊กและดูแลระบบ',
    images: siteUrl
      ? [
          {
            url: '/cafe.webp',
            width: 1200,
            height: 800,
            alt: 'Nick Studio — ตัวอย่างเว็บไซต์ธุรกิจ',
          },
        ]
      : undefined,
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
  description:
    'เว็บไซต์ที่บอกตัวตนธุรกิจคุณ ออกแบบและพัฒนาโดยนิก เลือกดูตัวอย่างเว็บไซต์ธุรกิจบริการ คาเฟ่ และที่พัก',
};
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

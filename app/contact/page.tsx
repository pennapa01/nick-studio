import type { Metadata } from 'next';
import ContactSection from '../../components/contact-section';
export const metadata: Metadata = {
  title: 'ติดต่อและขอประเมินงาน',
  description:
    'เล่าไอเดียเว็บไซต์หรือปัญหาระบบ เพื่อขอประเมินขอบเขตและค่าบริการกับ Nick Studio',
  alternates: { canonical: '/contact/' },
};
export default function Contact() {
  return (
    <>
      <header>
        <a className="brand" href="/">
          nick<span>studio</span>
        </a>
        <a href="/">กลับหน้าหลัก ↗</a>
      </header>
      <main>
        <h1 className="wrap contact-page-title">ติดต่อ Nick Studio</h1>
        <ContactSection />
      </main>
    </>
  );
}

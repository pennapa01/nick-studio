'use client';
import { useParams } from 'next/navigation';
import { templates } from '../data/templates';
import { MiniSite } from './mini-site';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
export default function Detail() {
  const { slug } = useParams();
  const t = templates.find((x) => x.id === slug);
  if (!t)
    return (
      <main className="detail-page">
        <h1>ไม่พบตัวอย่างนี้</h1>
        <a href="/">กลับหน้าหลัก</a>
      </main>
    );
  return (
    <main className="detail-page">
      <a href="/#templates" className="back">
        <ArrowLeft size={16} /> กลับไปดูตัวอย่างทั้งหมด
      </a>
      <div className="detail-layout">
        <MiniSite t={t} />
        <div>
          <div className="eyebrow">CONCEPT WEBSITE · {t.label}</div>
          <h1>{t.name}</h1>
          <p>{t.desc}</p>
          <p>
            ตัวอย่างสำหรับ{t.tag} ปรับสี โลโก้ รูป
            และเนื้อหาให้เข้ากับธุรกิจของคุณ
          </p>
          <ul>
            {[
              'รองรับมือถือและเดสก์ท็อป',
              'ส่วนแนะนำธุรกิจและรายการ' +
                (t.id === 'florist'
                  ? 'สินค้าและการเลือกช่อดอกไม้'
                  : t.id === 'dashboard'
                    ? 'ทรัพยากรและรายการติดตาม'
                    : t.id === 'stay'
                      ? 'ห้องพัก'
                      : t.id === 'cafe'
                        ? 'เมนู'
                        : 'บริการ'),
              'ช่องทางติดต่อและคำถามที่พบบ่อย',
              'โครงสร้างข้อมูลที่นำกลับมาใช้ได้',
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <div className="actions">
            <a className="button dark" href={'/demo/' + t.id}>
              ลองดูเว็บไซต์ <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href={'/contact?template=' + t.id}>
              สนใจรูปแบบนี้ ↗
            </a>
          </div>
          <small>
            เป็นธุรกิจสมมติเพื่อแสดงแนวทาง ไม่ใช่ผลงานลูกค้าจริง
            <br />
            ระบบจอง ชำระเงิน และการเชื่อมต่อข้อมูลจริงไม่รวมอยู่ในตัวอย่าง
          </small>
        </div>
      </div>
    </main>
  );
}

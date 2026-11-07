'use client';
import { ArrowUpRight } from 'lucide-react';
export default function PricingSection({
  setService,
}: {
  setService: (service: string) => void;
}) {
  return (
    <section className="section wrap pricing" id="pricing">
      <div className="section-top">
        <div>
          <div className="eyebrow">ขอบเขตชัดเจน ก่อนเริ่มงาน</div>
          <h2>
            ค่าบริการที่เริ่มต้น
            <br />
            <span>จากสิ่งที่ธุรกิจคุณต้องใช้</span>
          </h2>
        </div>
        <p>
          ราคาเริ่มต้นสำหรับงานตามขอบเขตด้านล่าง
          <br />
          สรุปราคาและคิวส่งมอบก่อนตกลงจ้างทุกครั้ง
        </p>
      </div>
      <div className="price-group">
        <div className="price-group-title">
          <span>01 / BUILD</span>
          <h3>ทำเว็บไซต์ใหม่</h3>
        </div>
        <div className="price-list">
          {[
            {
              name: 'Template Landing Page',
              price: '5,900',
              unit: 'บาท / โปรเจกต์',
              desc: 'เว็บไซต์หน้าเดียว ปรับจากตัวอย่างให้เป็นแบรนด์คุณ',
              scope:
                'ไม่เกิน 7 ส่วน · 1 ภาษา · ปรับสี โลโก้ รูป และข้อความ · ปุ่ม LINE / โทร / แผนที่ · Responsive และ SEO พื้นฐาน',
              extra: 'ลูกค้าเตรียมเนื้อหาและรูป · ปรับแก้รวม 2 รอบตามบรีฟเดิม',
              service: 'เว็บไซต์ใหม่',
            },
            {
              name: 'Business Website',
              price: '12,900',
              unit: 'บาท / โปรเจกต์',
              desc: 'เว็บไซต์ธุรกิจหลายหน้า สำหรับข้อมูลบริการที่ครบขึ้น',
              scope:
                'ไม่เกิน 5 หน้า · 1 ภาษา · รูปแบบจากชุด Template · Responsive · Title / Description และโครงสร้างหัวข้อรายหน้า',
              extra:
                'ลูกค้าเตรียมเนื้อหาและรูป · ปรับแก้รวม 2 รอบ · ไม่รวม CMS และระบบสมาชิก',
              service: 'เว็บไซต์ใหม่',
            },
            {
              name: 'Custom Web / API',
              price: '20,000',
              unit: 'บาท / โปรเจกต์',
              desc: 'ฟังก์ชันเฉพาะทางที่ต้องวิเคราะห์ก่อนพัฒนา',
              scope:
                'เริ่มต้นสำหรับโมดูลขนาดเล็ก 1 โมดูล ขอบเขตหน้าจอ API และฐานข้อมูลระบุในใบเสนอราคา',
              extra: 'เช่น ฟอร์มบันทึกข้อมูลพร้อม API · ระบบซับซ้อนประเมินแยก',
              service: 'พัฒนาฟังก์ชัน / API',
            },
          ].map((p) => (
            <article className="price-row" key={p.name}>
              <div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <small>{p.scope}</small>
                <small className="price-extra">{p.extra}</small>
              </div>
              <div className="price-action">
                <span className="starting">เริ่มต้น</span>
                <strong>฿{p.price}</strong>
                <small>{p.unit}</small>
                <a href="#contact" onClick={() => setService(p.service)}>
                  ขอประเมินงาน <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="price-group">
        <div className="price-group-title">
          <span>02 / SUPPORT</span>
          <h3>
            เว็บมีปัญหา
            <br />
            ให้ช่วยดูได้
          </h3>
          <p>
            .NET · Go · React.js · Next.js
            <br />
            Python / Flask · API
            <br />
            SQL Server · PostgreSQL
          </p>
        </div>
        <div className="price-list">
          {[
            {
              name: 'ตรวจสอบปัญหา',
              price: '1,000',
              unit: 'บาท / ครั้ง',
              desc: 'หาสาเหตุและสรุปแนวทางแก้ ก่อนตัดสินใจพัฒนาต่อ',
              scope:
                'วิเคราะห์ 1 อาการ ไม่เกิน 1 ชั่วโมง จากโค้ด Log และขั้นตอนที่ลูกค้าจัดเตรียม',
              extra:
                'ส่งสรุปผลตรวจและสิ่งที่ต้องตรวจเพิ่ม · ไม่รวมแก้โค้ด · ไม่รับประกันว่าจะพบสาเหตุภายในเวลา',
              service: 'ตรวจสอบปัญหา',
            },
            {
              name: 'Bug Fix',
              price: '1,500',
              unit: 'บาท / งาน',
              desc: 'แก้ปัญหาเฉพาะจุดในเว็บหรือระบบเดิม',
              scope:
                'บั๊กขนาดเล็ก 1 จุด ที่ทำซ้ำและระบุขอบเขตได้ งานไม่เกิน 2 ชั่วโมง รวมทดสอบส่วนที่แก้และสรุปการเปลี่ยนแปลง',
              extra:
                'ตรวจโค้ดก่อนยืนยันราคา · ดูแลบั๊กเดิมจากการแก้ไข 7 วัน · ปัญหาซับซ้อนเสนอราคาใหม่ก่อนทำ',
              service: 'แก้บั๊ก',
            },
            {
              name: 'Application Support',
              price: '3,500',
              unit: 'บาท / เดือน',
              desc: 'ดูแลระบบเดิมเป็นรอบ ตามเวลาที่ตกลงร่วมกัน',
              scope:
                'รวมเวลาตรวจปัญหา แก้บั๊กย่อย อัปเดตข้อมูล และรายงานงาน รวม 4 ชั่วโมง / เดือน · ชั่วโมงไม่สะสม',
              extra:
                'ส่วนเกิน 800 บาท / ชั่วโมง เมื่ออนุมัติก่อนเริ่ม · ไม่รวมฟีเจอร์ใหม่และการเฝ้าระวังระบบตลอดเวลา',
              service: 'Application Support รายเดือน',
            },
          ].map((p) => (
            <article className="price-row" key={p.name}>
              <div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <small>{p.scope}</small>
                <small className="price-extra">{p.extra}</small>
              </div>
              <div className="price-action">
                <span className="starting">เริ่มต้น</span>
                <strong>฿{p.price}</strong>
                <small>{p.unit}</small>
                <a href="#contact" onClick={() => setService(p.service)}>
                  สอบถามขอบเขต <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="pricing-terms">
        <div>
          <h4>สิ่งที่ควรรู้ก่อนเริ่ม</h4>
          <p>
            ราคานี้เป็นค่าบริการพัฒนา ไม่รวมโดเมน โฮสติ้ง ซอฟต์แวร์เสียเงิน
            รูปภาพมีลิขสิทธิ์ งานเขียนเนื้อหา และบริการ SEO ต่อเนื่อง
            ภาษีและเอกสารชำระเงินระบุในใบเสนอราคาตามกรณี
          </p>
        </div>
        <div>
          <h4>Support ตามนัดหมาย</h4>
          <p>
            งานดำเนินการหลักวันเสาร์–อาทิตย์ นัดหมายและยืนยันคิวก่อนเริ่ม
            ไม่ใช่บริการฉุกเฉินหรือ SLA 24/7 งาน Production
            ต้องตกลงวิธีสำรองข้อมูล ทดสอบ และช่วง Deploy ก่อนดำเนินการ
          </p>
        </div>
      </div>
    </section>
  );
}

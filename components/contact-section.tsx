'use client';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Copy } from 'lucide-react';
import { templates } from '../data/templates';
export default function ContactSection({
  initialService = 'เว็บไซต์ใหม่',
}: {
  initialService?: string;
}) {
  const [selected, setSelected] = useState('ยังไม่แน่ใจ');
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('template');
    const t = templates.find((x) => x.id === id);
    if (t) setSelected(t.name);
  }, []);
  const [service, setService] = useState(initialService);
  const [brief, setBrief] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">เริ่มต้นด้วยการคุยกัน</div>
          <h2>
            เว็บไซต์ถัดไป
            <br />
            อาจเป็นของ<span>คุณ.</span>
          </h2>
          <p>
            มีธุรกิจในใจแล้ว? เล่าให้นิกฟังได้เลย
            <br />
            เริ่มจากไอเดียเล็ก ๆ แล้วค่อยวางแผนไปด้วยกัน
          </p>
          <a className="contact-email" href="mailto:pennapa.m2026@gmail.com">
            pennapa.m2026@gmail.com <ArrowUpRight size={18} />
          </a>
          <span className="availability">
            <span className="dot" /> รับพูดคุยโปรเจกต์ใหม่
          </span>
        </div>
        <form
          onChange={() => {
            setBrief('');
            setCopied(false);
            setCopyError(false);
          }}
          onSubmit={async (e) => {
            e.preventDefault();
            const d = new FormData(e.currentTarget);
            const text = `คำขอประเมินเว็บไซต์\nชื่อ: ${d.get('name')}\nธุรกิจ: ${d.get('business')}\nติดต่อกลับ: ${d.get('contact')}\nบริการ: ${service}\nแบบที่สนใจ: ${selected}\nรายละเอียด: ${d.get('detail')}`;
            setBrief(text);
            setCopied(false);
          }}
        >
          <div className="form-head">
            เริ่มต้นโปรเจกต์ของคุณ <ArrowUpRight />
          </div>
          <div className="field-row">
            <label>
              ชื่อของคุณ
              <input
                name="name"
                required
                maxLength={100}
                placeholder="ชื่อที่ให้เราเรียก"
              />
            </label>
            <label>
              ชื่อธุรกิจ
              <input
                name="business"
                required
                maxLength={150}
                placeholder="ธุรกิจของคุณ"
              />
            </label>
          </div>
          <label>
            ช่องทางติดต่อกลับ
            <input
              name="contact"
              required
              maxLength={150}
              placeholder="อีเมล / LINE ID / เบอร์โทร"
            />
          </label>
          <label>
            บริการที่สนใจ
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {[
                'เว็บไซต์ใหม่',
                'พัฒนาฟังก์ชัน / API',
                'ตรวจสอบปัญหา',
                'แก้บั๊ก',
                'Application Support รายเดือน',
                'Domain / Deploy เว็บไซต์',
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label>
            เว็บไซต์แบบที่สนใจ
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option>ยังไม่แน่ใจ</option>
              {templates.map((t) => (
                <option key={t.id}>{t.name}</option>
              ))}
            </select>
          </label>
          <label>
            เล่าไอเดียสักนิด
            <textarea
              name="detail"
              required
              maxLength={3000}
              placeholder="อยากได้เว็บไซต์แบบไหน มีบริการอะไรบ้าง..."
              rows={3}
            />
          </label>
          <p className="form-notice">
            เตรียมข้อความแล้วกดเปิดแอปอีเมล เพื่อตรวจและส่งถึง
            pennapa.m2026@gmail.com หากไม่มีแอปอีเมล
            สามารถคัดลอกข้อความไปส่งผ่าน Gmail ได้
            ข้อมูลยังไม่ถูกส่งจนกว่าคุณจะกดส่งในอีเมล
          </p>
          <button className="button dark" type="submit">
            เตรียมอีเมลสอบถาม <ArrowUpRight size={18} />
          </button>
          {brief && (
            <div className="brief" aria-live="polite">
              <b>ข้อความพร้อมส่ง — ยังไม่ได้ส่งอีเมล</b>
              <pre>{brief}</pre>
              <a
                className="email-send"
                href={
                  'mailto:pennapa.m2026@gmail.com?subject=' +
                  encodeURIComponent(
                    'สอบถามงาน ' + service + ' — Nick Studio',
                  ) +
                  '&body=' +
                  encodeURIComponent(brief)
                }
              >
                เปิดแอปอีเมลเพื่อส่ง <ArrowUpRight size={15} />
              </a>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(brief);
                    setCopied(true);
                    setCopyError(false);
                  } catch {
                    setCopied(false);
                    setCopyError(true);
                  }
                }}
              >
                <Copy size={15} />
                {copied ? 'คัดลอกแล้ว' : 'คัดลอกข้อความ'}
              </button>
              {copyError && (
                <p role="status">
                  คัดลอกอัตโนมัติไม่ได้
                  กรุณาเลือกข้อความด้านบนแล้วคัดลอกด้วยตนเอง
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

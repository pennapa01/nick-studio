'use client';
import ResponsiveImage from './responsive-image';

import { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Flower2,
  Gift,
  Heart,
  Check,
  X,
  Plus,
} from 'lucide-react';
const bouquets = [
  {
    name: 'Softly, Yours',
    occasion: 'วันเกิด',
    price: 1290,
    img: 'florist',
    tone: 'ชมพูละมุน',
    desc: 'ช่อดอกไม้โทนหวาน สำหรับคำอวยพรที่อยากให้รู้สึกอบอุ่น',
  },
  {
    name: 'A Little Romance',
    occasion: 'วันครบรอบ',
    price: 1890,
    img: 'roses',
    tone: 'โรแมนติก',
    desc: 'ส่งความรู้สึกดี ๆ ผ่านดอกไม้ช่อพิเศษในวันสำคัญของคุณ',
  },
  {
    name: 'Sunny Little Things',
    occasion: 'แสดงความยินดี',
    price: 990,
    img: 'flowers',
    tone: 'สดใสเป็นธรรมชาติ',
    desc: 'สีสันเล็ก ๆ ที่ช่วยเติมรอยยิ้มให้ทุกความสำเร็จ',
  },
  {
    name: 'Just Because',
    occasion: 'วันเกิด',
    price: 1490,
    img: 'flowers',
    tone: 'พาสเทล',
    desc: 'ไม่ต้องมีเหตุผลมากมาย แค่คิดถึงกันก็เป็นโอกาสที่ดีแล้ว',
  },
];
export default function FloristDemo() {
  const [filter, setFilter] = useState('ทั้งหมด');
  const [picked, setPicked] = useState<number | null>(null);
  const [size, setSize] = useState('M');
  const [note, setNote] = useState('');
  const [summary, setSummary] = useState(false);
  const item = picked === null ? null : bouquets[picked];
  return (
    <main className="bloom">
      <div className="concept-bar">
        <a href="/templates/florist">
          <ArrowLeft size={13} /> Nick Studio / Concept website
        </a>
        <span>ร้านและสินค้าเป็นข้อมูลสมมติ · ไม่รับคำสั่งซื้อจริง</span>
        <a href="/contact?template=florist">
          สนใจเว็บไซต์นี้ <ArrowUpRight size={13} />
        </a>
      </div>
      <nav className="bloom-nav">
        <a className="bloom-logo" href="#">
          petal & poem
          <Flower2 size={23} />
        </a>
        <div>
          <a href="#bouquets">เลือกช่อดอกไม้</a>
          <a href="#bloom-story">เรื่องราวของเรา</a>
          <a href="#bloom-care">สิ่งที่ควรรู้</a>
        </div>
        <a href="#bouquets" className="bloom-shop">
          Find your flowers <ArrowUpRight size={16} />
        </a>
      </nav>
      <section className="bloom-hero">
        <div>
          <span className="micro">FLOWERS FOR THE WORDS YOU CANNOT SAY.</span>
          <h1>
            A little bloom.
            <br />
            <i>A lot of feeling.</i>
          </h1>
          <p>
            ให้ดอกไม้เล่าเรื่องที่อยู่ในใจ
            <br />
            ช่อเล็ก ๆ ที่ตั้งใจ เพื่อคนสำคัญของคุณ
          </p>
          <a href="#bouquets" className="bloom-button">
            เลือกช่อที่แทนใจ <ArrowRight size={18} />
          </a>
          <span className="bloom-handwritten">made with a little love.</span>
        </div>
        <div className="bloom-hero-image">
          <ResponsiveImage src="/florist.jpg" alt="ช่อดอกไม้ในโทนอ่อนหวาน" />
          <div className="bloom-stamp">
            <Flower2 size={29} />
            <span>
              A MOMENT
              <br />
              WORTH GIVING
            </span>
          </div>
          <span className="bloom-image-caption">
            THE EVERYDAY COLLECTION / CONCEPT 05
          </span>
        </div>
      </section>
      <div className="bloom-ribbon">
        <span>
          <Flower2 size={17} /> จัดช่อด้วยความใส่ใจ
        </span>
        <span>
          <Gift size={17} /> เพิ่มการ์ดข้อความได้
        </span>
        <span>
          <Heart size={17} /> สำหรับทุกความรู้สึกดี ๆ
        </span>
      </div>
      <section className="bloom-section" id="bouquets">
        <div className="bloom-heading">
          <div>
            <span className="micro">A FLOWER FOR EVERY FEELING</span>
            <h2>What’s the occasion?</h2>
            <p>วันพิเศษ หรือแค่วันธรรมดาที่อยากให้ใครยิ้ม</p>
          </div>
          <div className="bloom-tabs">
            {['ทั้งหมด', 'วันเกิด', 'วันครบรอบ', 'แสดงความยินดี'].map((x) => (
              <button
                key={x}
                className={filter === x ? 'active' : ''}
                onClick={() => setFilter(x)}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="bouquet-grid">
          {bouquets
            .map((x, i) => ({ ...x, index: i }))
            .filter((x) => filter === 'ทั้งหมด' || x.occasion === filter)
            .map((x) => (
              <article key={x.name}>
                <button
                  className="bouquet-photo"
                  onClick={() => {
                    setPicked(x.index);
                    setSummary(false);
                    setSize('M');
                    setNote('');
                  }}
                  aria-label={'ดูรายละเอียด ' + x.name}
                >
                  <ResponsiveImage
                    src={'/' + x.img + '.jpg'}
                    alt={'ภาพบรรยากาศประกอบช่อ ' + x.name}
                    loading="lazy"
                  />
                  <span>{x.occasion}</span>
                  <i>
                    <Plus size={19} />
                  </i>
                </button>
                <div>
                  <h3>{x.name}</h3>
                  <span>฿{x.price.toLocaleString()}</span>
                </div>
                <p>{x.tone}</p>
                <button
                  className="bouquet-more"
                  onClick={() => {
                    setPicked(x.index);
                    setSummary(false);
                    setSize('M');
                    setNote('');
                  }}
                >
                  ดูรายละเอียดช่อ <ArrowUpRight size={15} />
                </button>
              </article>
            ))}
        </div>
        <small className="subtle">
          สินค้า ราคา และโอกาสจัดส่งเป็นข้อมูลสมมติ ภาพใช้ประกอบแนวทาง
          ไม่ใช่ภาพสินค้าจริงตามรายการ
        </small>
      </section>
      <section className="bloom-story" id="bloom-story">
        <div className="bloom-story-photo">
          <ResponsiveImage
            src="/roses.jpg"
            alt="ภาพประกอบดอกไม้ในแสงธรรมชาติ"
            loading="lazy"
          />
        </div>
        <div>
          <span className="micro">MORE THAN A BOUQUET.</span>
          <h2>
            Some things
            <br />
            are better said
            <br />
            <i>with flowers.</i>
          </h2>
          <p>
            เราออกแบบแนวคิดร้านนี้จากความเชื่อว่า
            ของขวัญที่ดีไม่จำเป็นต้องยิ่งใหญ่
            แค่มีความตั้งใจอยู่ในรายละเอียดเล็ก ๆ ก็ทำให้ใครสักคนรู้สึกพิเศษได้
          </p>
          <span className="bloom-sign">petal & poem</span>
        </div>
      </section>
      <section className="bloom-section bloom-care" id="bloom-care">
        <div>
          <span className="micro">THE LITTLE DETAILS MATTER.</span>
          <h2>ก่อนส่งความรู้สึกดี ๆ</h2>
          <p>ตัวอย่างคำถามที่ช่วยให้ลูกค้าเลือกซื้อได้มั่นใจขึ้น</p>
        </div>
        <div>
          {[
            [
              'เลือกสีและขนาดช่อได้ไหม?',
              'ในตัวอย่างนี้สามารถลองเลือกขนาด M หรือ L และกรอกข้อความการ์ดได้ เป็นเพียงการสาธิต UI ไม่ส่งคำสั่งซื้อจริง',
            ],
            [
              'ดอกไม้เหมือนภาพทุกช่อหรือไม่?',
              'งานจริงควรแจ้งลูกค้าว่าชนิดและเฉดสีอาจเปลี่ยนตามฤดูกาล พร้อมตกลงการใช้ดอกไม้ทดแทนก่อนจัดส่ง ภาพหน้านี้ใช้ประกอบแนวคิดเท่านั้น',
            ],
            [
              'จัดส่งอย่างไร?',
              'เมื่อปรับเป็นเว็บร้านจริง สามารถเพิ่มพื้นที่จัดส่ง วันเวลา ค่าจัดส่ง และเงื่อนไขของร้านได้ ตัวอย่างนี้ยังไม่มีบริการจัดส่ง',
            ],
            [
              'ดูแลดอกไม้อย่างไร?',
              'ตัวอย่างพื้นที่สำหรับคำแนะนำจากร้าน เช่น วางในที่เย็น หลีกเลี่ยงแดดตรง และเปลี่ยนน้ำตามชนิดดอกไม้',
            ],
          ].map((x) => (
            <details key={x[0]}>
              <summary>
                {x[0]}
                <Plus size={16} />
              </summary>
              <p>{x[1]}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="bloom-cta">
        <Flower2 size={35} />
        <h2>Your story, in full bloom.</h2>
        <p>
          ชอบแนวทางร้านดอกไม้แบบนี้?
          <br />
          เปลี่ยนสินค้าและเรื่องราวให้เป็นแบรนด์ของคุณได้
        </p>
        <a href="/contact?template=florist" className="bloom-button">
          คุยเรื่องเว็บไซต์กับนิก <ArrowUpRight size={17} />
        </a>
      </section>
      <footer className="bloom-footer">
        <a className="bloom-logo" href="#">
          petal & poem
          <Flower2 size={20} />
        </a>
        <span>CONCEPT WEBSITE BY NICK STUDIO · ภาพจาก Unsplash</span>
        <a href="/">กลับหน้าพอร์ต ↗</a>
      </footer>
      {item && (
        <div
          className="bouquet-modal"
          role="dialog"
          aria-modal="true"
          aria-label={'รายละเอียด ' + item.name}
          onClick={() => setPicked(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setPicked(null);
            if (e.key === 'Tab') {
              const nodes = e.currentTarget.querySelectorAll<HTMLElement>(
                'button,select,textarea,a[href]',
              );
              const first = nodes[0],
                last = nodes[nodes.length - 1];
              if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last?.focus();
              } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first?.focus();
              }
            }
          }}
        >
          <div className="bouquet-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="bouquet-close"
              autoFocus
              onClick={() => setPicked(null)}
              aria-label="ปิดรายละเอียด"
            >
              <X size={22} />
            </button>
            <ResponsiveImage
              src={'/' + item.img + '.jpg'}
              alt={'ภาพประกอบ ' + item.name}
            />
            <div>
              <span className="micro">
                {item.occasion} / {item.tone}
              </span>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
              <strong className="bouquet-price">
                ฿{(item.price + (size === 'L' ? 500 : 0)).toLocaleString()}
              </strong>
              <label>
                ขนาดช่อตัวอย่าง
                <select
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                    setSummary(false);
                  }}
                >
                  <option value="M">M — ขนาดมาตรฐาน</option>
                  <option value="L">L — เพิ่มขนาด (+500 บาท)</option>
                </select>
              </label>
              <label>
                ข้อความในการ์ด
                <textarea
                  maxLength={200}
                  rows={3}
                  placeholder="เขียนถึงคนสำคัญ..."
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                    setSummary(false);
                  }}
                />
              </label>
              <button className="bloom-button" onClick={() => setSummary(true)}>
                ดูสรุปตัวเลือก <ArrowRight size={16} />
              </button>
              {summary && (
                <div className="bouquet-summary" role="status">
                  <Check size={17} />
                  <div>
                    <b>
                      {item.name} · ขนาด {size}
                    </b>
                    <p>{note || 'ไม่ระบุข้อความการ์ด'}</p>
                    <small>
                      รวมราคาตัวอย่าง ฿
                      {(item.price + (size === 'L' ? 500 : 0)).toLocaleString()}{' '}
                      · ยังไม่รวมจัดส่ง
                      <br />
                      นี่คือการสาธิต ไม่มีคำสั่งซื้อหรือการชำระเงิน
                    </small>
                  </div>
                </div>
              )}
              <small className="subtle">
                ตัวอย่างหน้ารายละเอียดสินค้า ไม่มีการบันทึกหรือส่งข้อมูล
              </small>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

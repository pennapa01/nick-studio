'use client';
import ResponsiveImage from './responsive-image';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  Minus,
  X,
  Wind,
  Sparkles,
  Wrench,
  Leaf,
  MapPin,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { templates } from '../data/templates';
import ExecutiveDashboard from './executive-dashboard';
import FloristDemo from './florist-demo';
const menuItems = [
  {
    name: 'Mori Latte',
    type: 'Coffee',
    note: 'เอสเปรสโซ · นมสด · กลิ่นถั่ว',
    price: 95,
    img: 'coffee',
  },
  {
    name: 'Slow Drip',
    type: 'Coffee',
    note: 'เมล็ดคั่วอ่อน · กลิ่นผลไม้ · ตามฤดูกาล',
    price: 120,
    img: 'cafe',
  },
  {
    name: 'Butter Croissant',
    type: 'Bakery',
    note: 'อบใหม่ · เนยหอม · กรอบนอกนุ่มใน',
    price: 85,
    img: 'bakery',
  },
  {
    name: 'Morning Pair',
    type: 'Bakery',
    note: 'ครัวซองต์ + กาแฟแก้วโปรด',
    price: 160,
    img: 'bakery',
  },
];
const rooms = [
  {
    name: 'The Garden Room',
    img: 'room',
    price: '1,800',
    desc: 'ห้องพักอบอุ่นที่เปิดรับแสงเช้า และสีเขียวจากสวน',
    size: '32 ตร.ม.',
    guests: '2 ท่าน',
  },
  {
    name: 'Mountain Hideaway',
    img: 'nature',
    price: '2,600',
    desc: 'ตื่นมาเจอวิวภูเขา พร้อมมุมระเบียงส่วนตัว',
    size: '45 ตร.ม.',
    guests: '2–3 ท่าน',
  },
  {
    name: 'Slow Living Suite',
    img: 'interior',
    price: '3,200',
    desc: 'พื้นที่กว้างสำหรับวันพักผ่อนที่ไม่ต้องรีบร้อน',
    size: '58 ตร.ม.',
    guests: '2–4 ท่าน',
  },
];
export default function Demo() {
  const { slug } = useParams();
  const t = templates.find((x) => x.id === slug);
  const [tab, setTab] = useState('All');
  const [room, setRoom] = useState(0);
  const [qty, setQty] = useState(1);
  const [job, setJob] = useState('ล้างแอร์');
  const [result, setResult] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  if (!t)
    return (
      <main className="detail-page">
        <h1>ไม่พบเว็บไซต์ตัวอย่าง</h1>
        <a href="/">กลับหน้าหลัก</a>
      </main>
    );
  if (t.id === 'dashboard') return <ExecutiveDashboard />;
  if (t.id === 'florist') return <FloristDemo />;
  const contact = '/contact?template=' + t.id;
  return (
    <main className={'living-demo living-' + t.id}>
      <div className="concept-bar">
        <a href={'/templates/' + t.id}>
          <ArrowLeft size={13} /> Nick Studio / Concept website
        </a>
        <span>ธุรกิจ ภาพ และราคาใช้เพื่อสาธิต</span>
        <a href={contact}>
          ใช้แนวทางนี้กับธุรกิจคุณ <ArrowUpRight size={13} />
        </a>
      </div>
      <nav className="living-nav">
        <a href="#" className="living-logo">
          {t.id === 'cafe'
            ? 'mori.'
            : t.id === 'stay'
              ? 'lanna / hideaway'
              : 'sabai home'}
          <small>{t.en}</small>
        </a>
        <div>
          <a href="#story">{t.id === 'cafe' ? 'Our story' : 'เกี่ยวกับเรา'}</a>
          <a href="#offer">
            {t.id === 'cafe' ? 'Menu' : t.id === 'stay' ? 'ห้องพัก' : 'บริการ'}
          </a>
          <a href="#moments">{t.id === 'stay' ? 'บรรยากาศ' : 'รายละเอียด'}</a>
        </div>
        <a className="living-nav-cta" href="#visit">
          {t.id === 'stay'
            ? 'วางแผนวันพัก'
            : t.id === 'cafe'
              ? 'Visit us'
              : 'ประเมินค่าบริการ'}{' '}
          <ArrowUpRight size={15} />
        </a>
      </nav>
      {t.id === 'cafe' ? (
        <>
          <section className="cafe-hero">
            <div className="cafe-title">
              <span className="micro">A NEIGHBOURHOOD COFFEE CONCEPT</span>
              <h1>
                Good coffee.
                <br />
                <i>No hurry.</i>
              </h1>
              <div className="cafe-hero-bottom">
                <p>
                  กาแฟดี ๆ ขนมอบหอม ๆ<br />
                  และพื้นที่เล็ก ๆ ให้คุณได้พักจากวันวุ่นวาย
                </p>
                <a href="#offer">
                  หากาแฟแก้วโปรด <ArrowRight size={20} />
                </a>
              </div>
            </div>
            <div className="cafe-hero-photo">
              <ResponsiveImage
                src="/cafe.jpg"
                loading="eager"
                fetchPriority="high"
                alt="การดริปกาแฟอย่างพิถีพิถัน"
              />
              <span className="round-seal">
                SLOW DOWN
                <br />
                SIP A LITTLE
                <br />✳
              </span>
              <span className="photo-caption">
                BREWED WITH CARE. ENJOYED SLOWLY.
              </span>
            </div>
          </section>
          <div className="cafe-strip">
            <span>Small batches</span>
            <span>✳</span>
            <span>Freshly baked</span>
            <span>✳</span>
            <span>Good everyday</span>
          </div>
          <section id="story" className="living-section cafe-story">
            <span className="micro">01 / A LITTLE ABOUT MORI</span>
            <h2>
              บางครั้ง ความสุข
              <br />
              ก็มาในแก้วใบเล็ก.
            </h2>
            <div>
              <p>
                เราเชื่อว่าวันธรรมดาก็มีช่วงเวลาดี ๆ ได้
                เริ่มจากกลิ่นกาแฟยามเช้า ขนมอบที่แบ่งกัน
                และบทสนทนาที่ไม่ต้องมองนาฬิกา
              </p>
              <p className="subtle">
                เรื่องราวร้านสมมติ สำหรับแสดงแนวทางเว็บไซต์คาเฟ่
              </p>
            </div>
          </section>
          <section id="offer" className="living-section cafe-menu">
            <div className="living-section-head">
              <div>
                <span className="micro">02 / YOUR DAILY FAVOURITES</span>
                <h2>Made for your mood.</h2>
              </div>
              <div className="menu-tabs">
                {['All', 'Coffee', 'Bakery'].map((x) => (
                  <button
                    className={tab === x ? 'chosen' : ''}
                    onClick={() => setTab(x)}
                    key={x}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
            <div className="food-grid">
              {menuItems
                .filter((x) => tab === 'All' || x.type === tab)
                .map((x) => (
                  <article key={x.name}>
                    <button
                      className="food-photo"
                      onClick={() => setPhoto(x.img)}
                      aria-label={'ขยายภาพ ' + x.name}
                    >
                      <ResponsiveImage
                        src={'/' + x.img + '.jpg'}
                        alt={x.name}
                        loading="lazy"
                      />
                      <span>
                        <Plus size={19} />
                      </span>
                    </button>
                    <div>
                      <h3>{x.name}</h3>
                      <span>฿{x.price}</span>
                    </div>
                    <p>{x.note}</p>
                  </article>
                ))}
            </div>
            <small className="subtle">
              รายการและราคาตัวอย่าง · ภาพบรรยากาศประกอบ อาจไม่ตรงกับรายการสินค้า
            </small>
          </section>
          <section className="cafe-moment" id="moments">
            <ResponsiveImage
              src="/bakery.jpg"
              alt="ขนมปังอบใหม่"
              loading="lazy"
            />
            <div>
              <span className="micro">A TABLE FOR YOUR LITTLE MOMENTS</span>
              <h2>
                Stay for a cup.
                <br />
                <i>Or two.</i>
              </h2>
              <p>
                มาคนเดียวก็ได้ นัดเพื่อนก็ดี
                <br />
                มีมุมโปรดรอคุณอยู่เสมอ
              </p>
              <a href="#visit">วางแผนแวะมาหาเรา ↗</a>
            </div>
          </section>
        </>
      ) : t.id === 'service' ? (
        <>
          <section className="service-hero">
            <div>
              <span className="micro">
                <span className="green-dot" /> HOME CARE, WITH CARE.
              </span>
              <h1>
                เรื่องบ้าน
                <br />
                ให้เรา<span>ช่วยดูแล.</span>
              </h1>
              <p>
                จากแอร์ที่เย็นสบาย ถึงบ้านที่สะอาดน่าอยู่
                <br />
                เลือกบริการที่เหมาะ แล้วใช้เวลากับสิ่งที่คุณรัก
              </p>
              <a className="living-button" href="#offer">
                เลือกบริการดูแลบ้าน <ArrowUpRight size={19} />
              </a>
              <div className="service-benefits">
                <span>
                  <Check size={14} /> ขอบเขตงานชัดเจน
                </span>
                <span>
                  <Check size={14} /> ประเมินก่อนเริ่ม
                </span>
              </div>
            </div>
            <div className="service-hero-image">
              <ResponsiveImage
                src="/service.jpg"
                alt="บ้านโปร่งสบายในบรรยากาศสงบ"
              />
              <div className="care-note">
                <Sparkles size={23} />
                <span>
                  กลับบ้านมา
                  <br />
                  <b>ก็สบายใจ.</b>
                </span>
              </div>
            </div>
          </section>
          <section id="offer" className="living-section service-offer">
            <div className="living-section-head">
              <div>
                <span className="micro">เลือกสิ่งที่บ้านคุณต้องการ</span>
                <h2>ดูแลครบ ในวันสบาย ๆ</h2>
              </div>
              <p>
                ตัวอย่างบริการสำหรับธุรกิจดูแลบ้าน
                <br />
                ปรับรายการและราคาได้ตามธุรกิจจริง
              </p>
            </div>
            <div className="care-grid">
              {[
                {
                  icon: <Wind />,
                  name: 'ล้างแอร์',
                  desc: 'ล้างทำความสะอาด ให้ลมเย็นกลับมาสดชื่น',
                  price: 590,
                },
                {
                  icon: <Sparkles />,
                  name: 'ทำความสะอาด',
                  desc: 'ดูแลพื้นที่ใช้งาน ให้บ้านกลับมาน่าอยู่',
                  price: 1200,
                },
                {
                  icon: <Wrench />,
                  name: 'ซ่อมบำรุง',
                  desc: 'ตรวจอาการและประเมินก่อนดำเนินการ',
                  price: 800,
                },
              ].map((x, i) => (
                <article key={x.name}>
                  <span className="care-icon">{x.icon}</span>
                  <small>0{i + 1}</small>
                  <h3>{x.name}</h3>
                  <p>{x.desc}</p>
                  <div>
                    เริ่มต้น <strong>฿{x.price.toLocaleString()}</strong>
                  </div>
                  <a
                    href="#visit"
                    onClick={() => {
                      setJob(x.name);
                      setResult(false);
                    }}
                  >
                    ประเมินบริการนี้ <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </section>
          <section className="service-story living-section" id="story">
            <ResponsiveImage
              src="/clean.jpg"
              alt="ภาพประกอบการทำความสะอาดบ้าน"
              loading="lazy"
            />
            <div>
              <span className="micro">ทำให้เรื่องดูแลบ้าน ง่ายขึ้น</span>
              <h2>
                ไม่ต้องรู้เรื่องช่าง
                <br />
                ก็เริ่มดูแลบ้านได้.
              </h2>
              <p>
                แค่เลือกบริการ บอกอาการหรือพื้นที่ที่อยากให้ดูแล
                แล้วคุยขอบเขตและราคาก่อนเริ่มงาน
              </p>
              <ol>
                {[
                  'เลือกบริการและเล่ารายละเอียด',
                  'ยืนยันขอบเขต ราคา และวันนัด',
                  'ตรวจงานร่วมกันก่อนส่งมอบ',
                ].map((x, i) => (
                  <li key={x}>
                    <span>0{i + 1}</span>
                    {x}
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <section className="living-section service-details" id="moments">
            <span className="micro">ก่อนนัดหมาย</span>
            <h2>คำถามเรื่องบ้านที่พบบ่อย</h2>
            {[
              [
                'ต้องเตรียมพื้นที่อย่างไร?',
                'ควรเก็บของมีค่า เคลียร์พื้นที่รอบจุดทำงาน และแจ้งข้อจำกัดของบ้านก่อนนัดหมาย',
              ],
              [
                'ราคาเปลี่ยนแปลงได้ไหม?',
                'ราคาที่แสดงเป็นตัวอย่างเริ่มต้น งานจริงประเมินจากขนาดพื้นที่ อุปกรณ์ และอาการ โดยแจ้งก่อนเริ่มงาน',
              ],
              [
                'บริการนี้จองจริงได้หรือไม่?',
                'หน้านี้เป็นเว็บไซต์สาธิต เครื่องมือประเมินราคาไม่สร้างการจองและไม่เรียกเก็บเงิน',
              ],
            ].map((x) => (
              <details key={x[0]}>
                <summary>
                  {x[0]}
                  <Plus size={17} />
                </summary>
                <p>{x[1]}</p>
              </details>
            ))}
          </section>
        </>
      ) : (
        <>
          <section className="stay-hero">
            <ResponsiveImage
              src="/nature.jpg"
              alt="ภูเขาและธรรมชาติในบรรยากาศสงบ"
            />
            <div>
              <span className="micro">
                A QUIET STAY, A LITTLE CLOSER TO NATURE.
              </span>
              <h1>
                Somewhere
                <br />
                <i>to slow down.</i>
              </h1>
              <p>พักจากความรีบ แล้วกลับมาได้ยินเสียงของตัวเอง</p>
              <a href="#offer" className="stay-outline">
                ค้นพบพื้นที่พักใจ <ArrowRight size={18} />
              </a>
            </div>
            <a className="stay-scroll" href="#story">
              SCROLL TO UNWIND <ChevronDown size={17} />
            </a>
          </section>
          <section className="living-section stay-story" id="story">
            <div>
              <span className="micro">THE ART OF DOING A LITTLE LESS</span>
              <h2>
                ไม่ต้องมีแผนมากมาย
                <br />
                แค่ได้พัก ก็เพียงพอ.
              </h2>
              <p>
                แสงเช้าที่ค่อย ๆ ลอดผ่านหน้าต่าง หนังสือที่ยังอ่านไม่จบ
                และกาแฟที่ไม่ต้องรีบดื่ม
                นี่คือพื้นที่สมมติที่เราออกแบบไว้สำหรับการพักผ่อนของคุณ
              </p>
              <div className="stay-perks">
                <span>
                  <Leaf size={19} /> ใกล้ธรรมชาติ
                </span>
                <span>
                  <Sparkles size={19} /> พื้นที่ส่วนตัว
                </span>
                <span>
                  <Clock size={19} /> ช่วงเวลาที่ช้าลง
                </span>
              </div>
            </div>
            <button
              onClick={() => setPhoto('stay')}
              className="stay-story-image"
              aria-label="ขยายภาพที่พัก"
            >
              <ResponsiveImage
                src="/stay.jpg"
                alt="อาคารที่พักท่ามกลางพื้นที่สีเขียว"
                loading="lazy"
              />
              <span>01 — THE HIDEAWAY ↗</span>
            </button>
          </section>
          <section className="living-section stay-rooms" id="offer">
            <div className="living-section-head">
              <div>
                <span className="micro">FIND YOUR OWN LITTLE CORNER</span>
                <h2>Rooms to remember.</h2>
              </div>
              <span className="subtle">03 SPACES / ONE SLOW ESCAPE</span>
            </div>
            <div className="room-selector">
              {rooms.map((x, i) => (
                <button
                  onClick={() => setRoom(i)}
                  className={room === i ? 'chosen' : ''}
                  key={x.name}
                >
                  <span>0{i + 1}</span>
                  {x.name}
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>
            <div className="room-feature" key={room}>
              <button
                onClick={() => setPhoto(rooms[room].img)}
                aria-label="ขยายภาพห้องพัก"
              >
                <ResponsiveImage
                  src={'/' + rooms[room].img + '.jpg'}
                  alt={'ภาพประกอบ ' + rooms[room].name}
                  loading="lazy"
                />
              </button>
              <div>
                <span className="micro">YOUR PRIVATE RETREAT</span>
                <h3>{rooms[room].name}</h3>
                <p>{rooms[room].desc}</p>
                <div className="room-spec">
                  <span>{rooms[room].size}</span>
                  <span>{rooms[room].guests}</span>
                  <span>อาหารเช้า*</span>
                </div>
                <div className="room-rate">
                  เริ่มต้น <strong>฿{rooms[room].price}</strong> / คืน
                </div>
                <a className="living-button" href="#visit">
                  ดูรายละเอียดการสอบถาม <ArrowUpRight size={17} />
                </a>
                <small className="subtle">
                  * ห้อง ราคา สิ่งอำนวยความสะดวกเป็นข้อมูลสมมติ
                  ภาพใช้ประกอบแนวคิด
                </small>
              </div>
            </div>
          </section>
          <section className="stay-gallery living-section" id="moments">
            <div>
              <span className="micro">COLLECT MOMENTS, NOT PLANS.</span>
              <h2>A slower kind of day.</h2>
            </div>
            <div className="gallery-grid">
              {['nature', 'interior', 'coffee'].map((p, i) => (
                <button
                  key={p}
                  onClick={() => setPhoto(p)}
                  aria-label={'ขยายภาพบรรยากาศ ' + (i + 1)}
                >
                  <ResponsiveImage
                    src={'/' + p + '.jpg'}
                    alt={['ธรรมชาติ', 'มุมพักผ่อน', 'กาแฟยามเช้า'][i]}
                    loading="lazy"
                  />
                  <span>
                    0{i + 1} / LITTLE MOMENTS <Plus size={16} />
                  </span>
                </button>
              ))}
            </div>
          </section>
        </>
      )}
      <section className="living-visit living-section" id="visit">
        {t.id === 'service' ? (
          <>
            <div>
              <span className="micro">ลองประเมินก่อนนัดหมาย</span>
              <h2>
                เริ่มต้นเท่าไหร่
                <br />
                ลองดูได้เลย.
              </h2>
              <p>
                เครื่องมือสาธิตการประเมินราคาเบื้องต้น
                <br />
                ไม่ใช่ใบเสนอราคาหรือระบบจองจริง
              </p>
            </div>
            <div className="quote-box">
              <label>
                บริการ
                <select
                  value={job}
                  onChange={(e) => {
                    setJob(e.target.value);
                    setResult(false);
                  }}
                >
                  {['ล้างแอร์', 'ทำความสะอาด', 'ซ่อมบำรุง'].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <div className="qty-label">
                จำนวน
                {job === 'ล้างแอร์'
                  ? 'เครื่อง'
                  : job === 'ทำความสะอาด'
                    ? 'พื้นที่'
                    : 'จุด'}
                <div>
                  <button
                    aria-label="ลดจำนวน"
                    onClick={() => {
                      setQty(Math.max(1, qty - 1));
                      setResult(false);
                    }}
                    disabled={qty === 1}
                  >
                    <Minus size={16} />
                  </button>
                  <output>{qty}</output>
                  <button
                    aria-label="เพิ่มจำนวน"
                    onClick={() => {
                      setQty(Math.min(10, qty + 1));
                      setResult(false);
                    }}
                    disabled={qty === 10}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button className="living-button" onClick={() => setResult(true)}>
                คำนวณราคาตัวอย่าง <ArrowRight size={17} />
              </button>
              {result && (
                <div className="quote-result" aria-live="polite">
                  ราคาเริ่มต้นโดยประมาณ
                  <strong>
                    ฿
                    {(
                      (job === 'ล้างแอร์'
                        ? 590
                        : job === 'ทำความสะอาด'
                          ? 1200
                          : 800) * qty
                    ).toLocaleString()}
                  </strong>
                  <small>
                    ไม่รวมงานเพิ่มเติม ต้องตรวจหน้างานและยืนยันราคาก่อนทำจริง
                  </small>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div>
              <span className="micro">
                {t.id === 'cafe'
                  ? 'SEE YOU AT MORI.'
                  : 'YOUR NEXT SLOW CHAPTER.'}
              </span>
              <h2>
                {t.id === 'cafe'
                  ? 'Make time for a little pause.'
                  : 'พักผ่อน ในแบบของคุณ.'}
              </h2>
              <p>
                {t.id === 'cafe'
                  ? 'ตัวอย่างรูปแบบข้อมูลร้าน: เปิด 08:00–17:00 น.'
                  : 'ตัวอย่างเงื่อนไข: เช็กอิน 14:00 น. · เช็กเอาต์ 11:00 น.'}
              </p>
              <small>
                ข้อมูลสมมติ ไม่ใช่สถานที่หรือบริการที่เปิดรับจองจริง
              </small>
            </div>
            <div className="visit-note">
              <MapPin size={24} />
              <h3>
                {t.id === 'cafe'
                  ? 'มุมเล็ก ๆ ของวันดี ๆ'
                  : 'เริ่มวางแผนวันพักผ่อน'}
              </h3>
              <p>
                เว็บไซต์ตัวอย่างนี้ไม่รับการจองหรือชำระเงิน
                <br />
                สนใจทำเว็บรูปแบบนี้ ติดต่อ Nick Studio ได้เลย
              </p>
              <a href={contact} className="living-button">
                สอบถามทำเว็บไซต์แนวนี้ <ArrowUpRight size={17} />
              </a>
            </div>
          </>
        )}
      </section>
      <footer className="living-footer">
        <a href="#" className="living-logo">
          {t.name.toLowerCase()}
        </a>
        <span>CONCEPT WEBSITE BY NICK STUDIO · ภาพประกอบจาก Unsplash</span>
        <a href={contact}>สนใจรูปแบบนี้ ↗</a>
      </footer>
      {photo && (
        <div
          className="photo-modal"
          role="dialog"
          aria-modal="true"
          aria-label="ภาพขยาย"
          onClick={() => setPhoto(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setPhoto(null);
            if (e.key === 'Tab') e.preventDefault();
          }}
        >
          <button
            autoFocus
            onClick={() => setPhoto(null)}
            aria-label="ปิดภาพขยาย"
          >
            <X size={26} />
          </button>
          <ResponsiveImage
            src={'/' + photo + '.jpg'}
            alt="ภาพประกอบแนวคิดแบบขยาย"
          />
        </div>
      )}
    </main>
  );
}

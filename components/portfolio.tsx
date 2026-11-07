'use client';
import ResponsiveImage from './responsive-image';

import PricingSection from './pricing-section';
import { useState } from 'react';
import { templates } from '../data/templates';
import { MiniSite } from './mini-site';
import ContactSection from './contact-section';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Menu,
  X,
  Code2,
  Monitor,
  Smartphone,
  Layers,
  Plus,
  Copy,
} from 'lucide-react';

export default function Home() {
  const [filter, setFilter] = useState('ทั้งหมด');
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState('เว็บไซต์ใหม่');
  return (
    <>
      <header>
        <a className="brand" href="/">
          nick<span>studio</span>
        </a>
        <nav id="main-nav" className={menu ? 'open' : ''}>
          <a href="#templates" onClick={() => setMenu(false)}>
            เว็บไซต์ตัวอย่าง
          </a>
          <a href="#services" onClick={() => setMenu(false)}>
            บริการ
          </a>
          <a href="#pricing" onClick={() => setMenu(false)}>
            ค่าบริการ
          </a>
          <a href="#about" onClick={() => setMenu(false)}>
            รู้จักนิก
          </a>
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenu(false)}
          >
            คุยเรื่องเว็บไซต์ <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu"
          aria-label={menu ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={menu}
          aria-controls="main-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section className="hero wrap">
          <div className="hero-meta">
            <span>เว็บไซต์สำหรับธุรกิจที่มีเรื่องราว</span>
            <span>DESIGN & DEVELOPMENT / REMOTE</span>
          </div>
          <div className="hero-text">
            <h1>
              เว็บที่เป็นคุณ.
              <br />
              <span>ทำงานให้ธุรกิจคุณ.</span>
            </h1>
            <div className="hero-intro">
              <p className="lead">
                นิก นักพัฒนาเว็บไซต์อิสระ
                <br />
                ช่วยเปลี่ยนเรื่องราวของธุรกิจให้เป็นเว็บไซต์
                <br />
                ที่ดูดี ใช้งานง่าย และมีเป้าหมายชัดเจน
              </p>
              <a className="button dark" href="#templates">
                สำรวจเว็บไซต์ตัวอย่าง <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="editorial-image">
              <ResponsiveImage
                src="/cafe.jpg"
                loading="eager"
                fetchPriority="high"
                alt="กาแฟและบรรยากาศสำหรับแนวทางเว็บไซต์คาเฟ่"
              />
              <div className="image-title">
                <small>CONCEPT NO. 02 / CAFÉ</small>
                <span>
                  Mori.
                  <i>
                    Good coffee.
                    <br />
                    Better mornings.
                  </i>
                </span>
              </div>
              <a
                className="image-link"
                href="/demo/cafe"
                aria-label="เปิดตัวอย่างเว็บไซต์ Mori Coffee"
              >
                <ArrowUpRight size={28} />
              </a>
            </div>
            <div className="art-caption">
              <span>ภาพบรรยากาศประกอบแนวคิด · MORI COFFEE</span>
              <a href="/templates/cafe">ดูโปรเจกต์ตัวอย่าง ↗</a>
            </div>
          </div>
        </section>
        <section className="section wrap" id="templates">
          <div className="section-top">
            <div>
              <div className="eyebrow">SELECTED CONCEPTS / 01–05</div>
              <h2>
                แต่ละธุรกิจ มีตัวตนต่างกัน.
                <br />
                <span>เว็บไซต์ก็ควรเป็นแบบนั้น</span>
              </h2>
            </div>
            <p>
              เลือกดูแนวทางที่เหมาะกับธุรกิจ
              <br />
              ทุกแบบปรับสี รูปภาพ และเนื้อหาได้
            </p>
          </div>
          <div className="filters">
            {['ทั้งหมด', ...templates.map((t) => t.label)].map((f) => (
              <button
                key={f}
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
              >
                {f}
                {f === 'ทั้งหมด' && (
                  <span>{templates.length.toString().padStart(2, '0')}</span>
                )}
              </button>
            ))}
          </div>
          <div className="template-grid editorial-projects">
            {templates
              .filter((t) => filter === 'ทั้งหมด' || filter === t.label)
              .map((t, i) => (
                <article key={t.id}>
                  <a
                    className="preview"
                    style={{ background: t.color }}
                    href={'/templates/' + t.id}
                  >
                    <div className="card-browser">
                      <div className="tiny-bar">● ● ●</div>
                      <MiniSite t={t} />
                    </div>
                    <span className="preview-open">
                      ดูรายละเอียด <ArrowUpRight size={16} />
                    </span>
                  </a>
                  <div className="card-info">
                    <div>
                      <small>{t.tag}</small>
                      <h3>
                        <a href={'/templates/' + t.id}>{t.name}</a>
                      </h3>
                    </div>
                    <a
                      className="circle"
                      href={'/demo/' + t.id}
                      aria-label={'ดูตัวอย่าง ' + t.name}
                    >
                      <ArrowUpRight size={21} />
                    </a>
                  </div>
                  <p className="card-desc">{t.desc}</p>
                  <span className="demo-label">
                    CONCEPT WEBSITE · เว็บไซต์ตัวอย่าง
                  </span>
                </article>
              ))}
          </div>
          <div className="collection-note">
            <Layers size={18} />
            <p>
              ยังไม่เจอแบบที่ใช่? เราคุยกันเพื่อออกแบบให้เหมาะกับธุรกิจคุณได้
            </p>
            <a href="#contact">
              เล่าไอเดียให้นิกฟัง <ArrowRight size={16} />
            </a>
          </div>
        </section>
        <section className="services section" id="services">
          <div className="wrap">
            <div className="section-top">
              <div>
                <div className="eyebrow">บริการ</div>
                <h2>
                  จากไอเดียของคุณ
                  <br />
                  สู่เว็บไซต์ที่ใช้งานได้จริง
                </h2>
              </div>
              <p>
                ใส่ใจทั้งสิ่งที่ลูกค้าเห็น
                <br />
                และระบบเบื้องหลังที่ธุรกิจต้องใช้
              </p>
            </div>
            <div className="service-grid">
              {[
                {
                  n: '01',
                  icon: <Monitor />,
                  title: 'Business Website',
                  th: 'เว็บไซต์สำหรับธุรกิจ',
                  text: 'แนะนำแบรนด์ บริการ และจุดเด่น พร้อมช่องทางให้ลูกค้าติดต่อได้ง่าย',
                },
                {
                  n: '02',
                  icon: <Layers />,
                  title: 'SEO Landing Page',
                  th: 'หน้าเว็บเฉพาะบริการ',
                  text: 'วางเนื้อหาให้ตอบโจทย์บริการหลัก พร้อมโครงสร้างหน้าและข้อมูลพื้นฐานสำหรับ SEO',
                },
                {
                  n: '03',
                  icon: <Code2 />,
                  title: 'Custom Development',
                  th: 'พัฒนาตามความต้องการ',
                  text: 'ต่อยอดฟังก์ชัน เชื่อมต่อ API หรือปรับเว็บไซต์เดิม โดยประเมินขอบเขตงานร่วมกัน',
                },
                {
                  n: '04',
                  icon: <Code2 />,
                  title: 'Application Support',
                  th: 'รับแก้บั๊กและดูแลระบบเดิม',
                  text: 'วิเคราะห์ Error และแก้ปัญหา Frontend, Backend, API และฐานข้อมูล รองรับ .NET, Go, React.js, Next.js และ Python (Flask) รวมถึง SQL Server และ PostgreSQL โดยตรวจสอบโค้ดและขอบเขตก่อนประเมินงาน',
                },
                {
                  n: '05',
                  icon: <Monitor />,
                  title: 'Domain & Web Deployment',
                  th: 'ช่วยนำเว็บไซต์ขึ้นใช้งานจริง',
                  text: 'ช่วยตั้งค่า Domain, DNS และ HTTPS พร้อม Deploy เว็บไซต์บน Hosting หรือ Cloud Server ตามระบบที่รองรับ เช่น IIS และ Docker ตรวจสอบความพร้อมและสรุปขอบเขตก่อนเริ่มงาน',
                },
              ].map((s) => (
                <div className="service-item" key={s.n}>
                  <div className="service-icon">
                    {s.icon}
                    <span>{s.n}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <b>{s.th}</b>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="included">
              <span>
                <Check size={16} /> Responsive design
              </span>
              <span>
                <Check size={16} /> ข้อมูลแบรนด์ของคุณ
              </span>
              <span>
                <Check size={16} /> ช่องทางติดต่อ
              </span>
              <span>
                <Check size={16} /> แนะนำวิธีดูแลเว็บไซต์
              </span>
            </div>
          </div>
        </section>
        <PricingSection setService={setService} />
        <section className="section wrap process">
          <div>
            <div className="eyebrow">วิธีทำงาน</div>
            <h2>
              ทำเรื่องเว็บไซต์
              <br />
              ให้เป็นเรื่องง่าย
            </h2>
            <p>
              คุยกับคนทำงานโดยตรง
              <br />
              เห็นทิศทางชัดเจนในทุกขั้นตอน
            </p>
          </div>
          <div className="steps">
            {[
              [
                'คุยให้เข้าใจธุรกิจ',
                'เล่าเป้าหมาย เลือกแนวทาง และสรุปสิ่งที่ต้องการ',
              ],
              [
                'สรุปขอบเขตและราคา',
                'ตกลงรายละเอียด ระยะเวลา และสิ่งที่ต้องเตรียมก่อนเริ่ม',
              ],
              [
                'ออกแบบและพัฒนา',
                'จัดวางเนื้อหา ปรับภาพลักษณ์ และส่งให้ตรวจตามข้อตกลง',
              ],
              [
                'ตรวจสอบและส่งมอบ',
                'ทดสอบการใช้งาน เตรียมเปิดเว็บ และแนะนำการดูแล',
              ],
            ].map((s, i) => (
              <div key={s[0]}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{s[0]}</h3>
                  <p>{s[1]}</p>
                </div>
                <ArrowUpRight size={19} />
              </div>
            ))}
          </div>
        </section>
        <section className="about wrap" id="about">
          <div className="about-visual">
            <div className="monogram">
              nick.
              <span>
                ออกแบบด้วยความเข้าใจ
                <br />
                พัฒนาด้วยความใส่ใจ
              </span>
            </div>
            <div>
              WORKING REMOTELY
              <br />
              BUILDING FOR YOUR NEXT CHAPTER.
            </div>
          </div>
          <div>
            <div className="eyebrow">รู้จักคนทำเว็บ</div>
            <h2>
              สวัสดีค่ะ นิกเอง <span className="wave">↗</span>
            </h2>
            <p className="about-lead">
              นักพัฒนา Full Stack
              <br />
              ที่อยากช่วยให้ธุรกิจเล็ก ๆ มีเว็บที่ภูมิใจ
            </p>
            <p>
              มีประสบการณ์พัฒนาเว็บไซต์และระบบในธุรกิจ Healthcare รวมถึงระบบด้าน
              Data Center ในรูปแบบ Dashboard สรุปข้อมูลสำหรับผู้บริหาร
              เพื่อให้เห็นภาพรวมและใช้ประกอบการตัดสินใจ ดูแลทั้งหน้าบ้าน
              หลังบ้าน และการเชื่อมต่อ API
              นิกนำความเข้าใจด้านระบบมาผสานกับการออกแบบที่ใช้งานง่าย
              เพื่อให้เว็บไซต์ตอบโจทย์ธุรกิจของคุณ
            </p>
            <div className="tags">
              <span>Full Stack Developer</span>
              <span>Executive Dashboard</span>
              <span>Available nationwide</span>
            </div>
          </div>
        </section>
        <section className="section wrap faq">
          <div>
            <div className="eyebrow">คำถามที่พบบ่อย</div>
            <h2>ก่อนเริ่มทำเว็บ</h2>
          </div>
          <div>
            {[
              [
                'ต้องเตรียมอะไรบ้าง?',
                'ชื่อธุรกิจ โลโก้ รายละเอียดบริการ รูปภาพ และช่องทางติดต่อ หากยังมีไม่ครบ สามารถคุยเพื่อช่วยวางโครงสร้างเนื้อหาก่อนได้',
              ],
              [
                'ปรับจากตัวอย่างได้แค่ไหน?',
                'ปรับสี รูป ข้อความ และลำดับส่วนต่าง ๆ ได้ตามขอบเขตที่ตกลง ฟังก์ชันเพิ่มเติมจะประเมินแยกก่อนเริ่มงาน',
              ],
              [
                'ราคาและระยะเวลาทำงานเป็นอย่างไร?',
                'ดูราคาเริ่มต้นและขอบเขตได้ในส่วนค่าบริการ ราคาจริงขึ้นกับความซับซ้อนและความพร้อมของข้อมูล งานหลักดำเนินการวันเสาร์–อาทิตย์ โดยตกลงกำหนดส่งก่อนเริ่มทุกครั้ง',
              ],
              [
                'รับแก้ระบบที่คนอื่นพัฒนาไว้ไหม?',
                'รับตรวจสอบโค้ดและประเมินก่อนเริ่ม โดยต้องมี Source Code หรือสิทธิ์เข้าถึงที่จำเป็น พร้อมอาการปัญหาและขั้นตอนทำซ้ำ ค่าตรวจสอบเป็นคนละรายการกับค่าแก้บั๊ก',
              ],
              [
                'Support รายเดือนรวมอะไรบ้าง?',
                'เริ่มต้น 3,500 บาท รวมเวลาทำงาน 4 ชั่วโมงต่อเดือนตามนัดหมาย ชั่วโมงไม่สะสม ส่วนเกิน 800 บาทต่อชั่วโมงเมื่ออนุมัติก่อนเริ่ม ไม่รวมฟีเจอร์ใหม่หรือการตอบสนองฉุกเฉิน 24 ชั่วโมง',
              ],
              [
                'ทำเว็บแล้วจะติดอันดับ Google เลยไหม?',
                'การเตรียมโครงสร้าง SEO เป็นจุดเริ่มต้น อันดับยังขึ้นกับเนื้อหา การแข่งขัน และการดูแลต่อเนื่อง จึงไม่รับประกันอันดับ',
              ],
              [
                'ตัวอย่างเหล่านี้เป็นผลงานลูกค้าจริงไหม?',
                'ชุดนี้เป็น Concept Website ของธุรกิจสมมติ เพื่อให้เห็นแนวทางการออกแบบ ไม่ใช่ผลงานหรือคำรับรองจากลูกค้าจริง',
              ],
            ].map((f) => (
              <details key={f[0]}>
                <summary>
                  {f[0]}
                  <Plus size={18} />
                </summary>
                <p>{f[1]}</p>
              </details>
            ))}
          </div>
        </section>
        <ContactSection initialService={service} key={service} />
      </main>
      <footer className="wrap">
        <a className="brand" href="/">
          nick<span>studio</span>
        </a>
        <span>ออกแบบและพัฒนาโดยนิก · รับงานทุกพื้นที่</span>
        <small>© {new Date().getFullYear()} Nick Studio</small>
      </footer>
    </>
  );
}

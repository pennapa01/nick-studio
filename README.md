# Nick Studio

เว็บไซต์ Portfolio ภาษาไทยสำหรับนำเสนอบริการพัฒนาเว็บ พร้อม Concept Website 5 รูปแบบ ใช้ Next.js App Router, React และ TypeScript ส่งออกเป็น Static HTML โดยไม่ต้องมี Backend

## เริ่มต้น

ต้องใช้ Node.js 22.13 ขึ้นไป และ npm

```sh
npm ci
npm run dev
```

บน PowerShell หาก execution policy ปิดกั้น `npm.ps1` ให้ใช้ `npm.cmd` แทน `npm`

## ตรวจสอบและ Build

```sh
npm run format
npm run check
```

`check` ตรวจรูปแบบโค้ด TypeScript, production build และไฟล์ที่ส่งออก รวมถึงลิงก์ภายใน Metadata และหน้าติดต่อ ผลลัพธ์อยู่ใน `out/`

## โครงสร้าง

- `app/` — Routes และ Metadata รายหน้า รวม sitemap และ robots
- `components/portfolio.tsx` — หน้าหลัก
- `components/contact-section.tsx` — เตรียมข้อความอีเมลและคัดลอกข้อความ
- `components/pricing-section.tsx` — ราคาและขอบเขตบริการ
- `components/mini-site.tsx` — ภาพตัวอย่างเว็บ
- `data/templates.ts` — ข้อมูลตัวอย่างที่ใช้ร่วมกัน
- `components/responsive-image.tsx` — รูป WebP หลายขนาดพร้อม intrinsic dimensions
- `scripts/` — แปลงภาพและตรวจไฟล์ Static

## โดเมนและ SEO

ใช้ URL ฟรีจากบริการโฮสต์ได้ ไม่จำเป็นต้องซื้อโดเมน คัดลอก `.env.example` เป็น `.env.local` แล้วกำหนด `NEXT_PUBLIC_SITE_URL` เป็น URL จริง เช่น URL ที่โฮสต์มอบให้ จากนั้น Build ใหม่

หากยังไม่กำหนด URL ระบบจะไม่สร้างรายการใน sitemap หรือ canonical แบบ absolute เพื่อหลีกเลี่ยงการเผยแพร่โดเมนสมมติ ภาพสำหรับแชร์จะเปิดใช้เมื่อกำหนด URL แล้ว หน้า demo ตั้งค่า noindex ส่วนรายละเอียดตัวอย่างมี Title และ Description แยกกัน

## ติดต่อ

ฟอร์มไม่บันทึกหรือส่งข้อมูลเข้าเซิร์ฟเวอร์ กดเตรียมข้อความแล้วเปิดแอปอีเมลเพื่อส่ง หรือคัดลอกไปใช้กับบริการอีเมล ผู้ใช้ต้องกดส่งในอีเมลเอง ไม่มี API key หรือบริการรับฟอร์มที่ต้องตั้งค่า

## รูปภาพ

เก็บต้นฉบับ JPG ใน `public/` หลังเปลี่ยนภาพให้รัน:

```sh
npm run images
npm run format
npm run check
```

สคริปต์ใช้ Sharp สร้าง WebP ขนาด 480, 960 และ 1600 พิกเซล โดยไม่ขยายภาพเกินต้นฉบับ พร้อมสร้าง `data/images.json` ให้คอมโพเนนต์ใช้กำหนดขนาดภาพ

## เผยแพร่บน Static hosting

ตั้ง Build command เป็น `npm run build` และ Publish directory เป็น `out` ตั้ง `NEXT_PUBLIC_SITE_URL` เป็น URL ของเว็บในระบบโฮสต์ แล้ว Deploy ใหม่ รองรับโฮสต์ที่ให้บริการไฟล์ที่ URL รากของโดเมน หากใช้ GitHub Pages ให้ใช้โดเมนรากแบบ `<user>.github.io` เพราะโปรเจกต์ยังไม่ได้ตั้ง basePath สำหรับโฟลเดอร์ย่อย

GitHub Actions ตรวจโค้ดและ Build แล้วเก็บ `out/` เป็น artifact ยังไม่เผยแพร่เข้าโฮสต์โดยอัตโนมัติ

## ขอบเขตตัวอย่าง

Dashboard, การเลือกสินค้า การคำนวณราคา และการเลือกห้องพักใช้ข้อมูลจำลอง ไม่มีระบบจอง ชำระเงิน บัญชีผู้ใช้ หรือการเชื่อมต่อข้อมูลจริง

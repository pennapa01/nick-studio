# Nick Studio

เว็บไซต์พอร์ตและเว็บไซต์ตัวอย่าง 5 ธุรกิจ: Executive Dashboard / Data Center, ธุรกิจบริการ, คาเฟ่, ที่พัก และร้านดอกไม้

เวอร์ชันสำหรับเก็บบน GitHub และนำไป Deploy ภายนอก ใช้ Next.js + React + TypeScript และ Static Export โดยไม่พึ่งการเข้าสู่ระบบ ChatGPT

## เริ่มต้นบนเครื่อง

ติดตั้ง Node.js 22.13 ขึ้นไป (ใช้ Node 22 LTS ให้ตรง CI) แล้วเปิด Terminal ในโฟลเดอร์นี้:

```sh
npm ci
npm run dev
```

เปิด URL ที่คำสั่งแสดง เมื่อพร้อม Build:

```sh
npm run build
```

ไฟล์สำหรับเปิดใช้งานจริงอยู่ใน `out/` ต้องให้บริการผ่าน Static Hosting ไม่ใช่ดับเบิลคลิกไฟล์ HTML และไม่ใช้ `next start` กับโหมด export

## นำขึ้น GitHub

1. สร้าง repository ว่างชื่อ `nick-studio` ในบัญชีที่ต้องการ แนะนำ Private ไม่ต้องเพิ่ม README หรือ .gitignore จากหน้า GitHub
2. แตกไฟล์แพ็กเกจ แล้วเข้าโฟลเดอร์ที่มี package.json
3. เปลี่ยน URL ในคำสั่งด้านล่างเป็น repository ของตนเอง

```sh
git init -b main
git add .
git commit -m "Initial Nick Studio portfolio"
git remote add origin https://github.com/YOUR_USERNAME/nick-studio.git
git push -u origin main
```

GitHub จะใช้การเข้าสู่ระบบบนเครื่องของคุณ ไม่ต้องใส่รหัสผ่านหรือ Token ลงในไฟล์โค้ด

## Deploy แบบสาธารณะผ่าน Cloudflare Pages

1. เข้าบัญชี Cloudflare ของคุณ และสร้าง Pages project ด้วยการเชื่อม GitHub
2. เลือก repository นี้ และเลือก Production branch เป็น `main`
3. Root directory: ราก repository (โฟลเดอร์ที่มี package.json)
4. Build command: `npm run build`
5. Build output directory: `out`
6. ตั้ง Node.js ให้เป็น 22 หากระบบไม่ได้เลือกให้อัตโนมัติ
7. Deploy แล้วตรวจเว็บจากลิงก์ `pages.dev` ที่ระบบคืนให้
8. ทดสอบหน้าแรก, /contact/, /templates/dashboard/, /demo/dashboard/ และ Demo อื่นโดยเปิด URL ตรงและกด Refresh

เว็บไซต์เป็น Static Export ไม่มี API ฝั่งเซิร์ฟเวอร์ในแพ็กเกจนี้ เมื่อ push ขึ้น main ระบบ Pages ที่เชื่อมไว้จะสร้าง Deployment ใหม่ตามการตั้งค่าของผู้ให้บริการ

หากมีโดเมน: เพิ่มที่ Custom domains ของ Pages project ก่อน แล้วตั้ง DNS ตามคำแนะนำที่ Cloudflare แสดง ตรวจ HTTPS และ Redirect www/non-www หลังเชื่อมสำเร็จ

Repository เป็น Private ได้ ส่วนเว็บที่ Pages เผยแพร่เป็น Public แยกจากกัน การเชื่อมบัญชีและอนุญาตเข้าถึง Repository ต้องทำในบัญชีของคุณ

## โครงสร้าง

- `app/`: หน้าและ Static Route Definitions
- `components/portfolio.tsx`: หน้า Portfolio และข้อมูล Template
- `components/demo-page.tsx`: Demo ธุรกิจบริการ คาเฟ่ ที่พัก
- `components/executive-dashboard.tsx`: Dashboard ข้อมูลจำลอง
- `components/florist-demo.tsx`: Demo ร้านดอกไม้
- `components/back-to-top.tsx`: ปุ่มกลับขึ้นด้านบน
- `app/globals.css`: รูปแบบหน้าจอและ Responsive
- `public/`: รูปภาพและไฟล์ Static
- `.github/workflows/build.yml`: ตรวจ Build และเก็บผลลัพธ์เป็น Actions artifact ไม่ได้ Deploy อัตโนมัติด้วยตัวมันเอง

## สิ่งที่ควรทราบก่อนเผยแพร่

- หน้า Portfolio มีอีเมลรับงาน `pennapa.m2026@gmail.com` ตามที่เจ้าของเว็บระบุ
- ฟอร์มสร้าง mailto เพื่อเปิดแอปอีเมลของผู้ใช้ ไม่ส่งอีเมลอัตโนมัติจากเซิร์ฟเวอร์ และไม่เก็บฐานข้อมูล
- Demo ทุกแบบและ Executive Dashboard ใช้ข้อมูลสมมติ ไม่มีระบบจอง ชำระเงิน หรือการเชื่อมต่อ Data Center จริง
- หน้า Demo กำหนด noindex และมี `_headers` สำหรับ Pages เพื่อแยกจากหน้าพอร์ต
- ภาพประกอบมาจาก Unsplash เก็บไว้ใน public; ควรทบทวนเงื่อนไขภาพและเปลี่ยนเป็นภาพลูกค้าก่อนนำ Template ไปใช้กับธุรกิจจริง
- Google Fonts ถูกโหลดจากภายนอก หากเข้าถึงไม่ได้จะใช้ฟอนต์สำรอง
- ไม่รวมบัญชี Cloudflare, GitHub credentials, Domain หรือค่า Hosting
- อย่าอัปโหลด `.env`, Token, node_modules หรือโฟลเดอร์ Build เข้า Git

## การแก้ไขภายหลัง

แก้ไฟล์ → `npm run build` → ตรวจผล → commit/push → ตรวจ Deployment ที่ Pages

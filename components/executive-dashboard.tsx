'use client';
import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import {
  LayoutDashboard,
  Server,
  Activity,
  ArrowUpRight,
  Download,
  ArrowLeft,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronRight,
} from 'lucide-react';
const facilities = [
  {
    name: 'Bangkok DC',
    servers: 240,
    online: 238,
    cpu: 64,
    memory: 72,
    storage: 68,
    power: 112,
    cost: 186000,
    incidents: 2,
  },
  {
    name: 'Regional DC',
    servers: 96,
    online: 96,
    cpu: 48,
    memory: 57,
    storage: 51,
    power: 43,
    cost: 72000,
    incidents: 0,
  },
  {
    name: 'Disaster Recovery',
    servers: 64,
    online: 63,
    cpu: 35,
    memory: 46,
    storage: 76,
    power: 28,
    cost: 54000,
    incidents: 1,
  },
];
const allAlerts = [
  {
    id: 'DC-1042',
    site: 'Bangkok DC',
    title: 'พื้นที่จัดเก็บ Cluster A ใกล้เกณฑ์แจ้งเตือน',
    level: 'สูง',
    owner: 'Infrastructure',
    status: 'กำลังตรวจสอบ',
  },
  {
    id: 'DC-1043',
    site: 'Disaster Recovery',
    title: 'Backup verification รอการตรวจยืนยัน',
    level: 'กลาง',
    owner: 'Operations',
    status: 'รอติดตาม',
  },
  {
    id: 'DC-1044',
    site: 'Bangkok DC',
    title: 'Server node offline 2 เครื่อง',
    level: 'สูง',
    owner: 'Infrastructure',
    status: 'กำลังตรวจสอบ',
  },
];
export default function ExecutiveDashboard() {
  const [site, setSite] = useState('ทุกศูนย์ข้อมูล');
  const [period, setPeriod] = useState('7');
  const [view, setView] = useState('ภาพรวม');
  const [severity, setSeverity] = useState('ทั้งหมด');
  const [exported, setExported] = useState(false);
  const rows = facilities.filter(
    (x) => site === 'ทุกศูนย์ข้อมูล' || x.name === site,
  );
  const total = rows.reduce(
    (a, x) => ({
      servers: a.servers + x.servers,
      online: a.online + x.online,
      cost: a.cost + x.cost,
      power: a.power + x.power,
    }),
    { servers: 0, online: 0, cost: 0, power: 0 },
  );
  const avg = (key: 'cpu' | 'memory' | 'storage') =>
    Math.round(
      rows.reduce((a, x) => a + x[key] * x.servers, 0) / total.servers,
    );
  const alerts = allAlerts.filter(
    (x) =>
      (site === 'ทุกศูนย์ข้อมูล' || x.site === site) &&
      (severity === 'ทั้งหมด' || x.level === severity),
  );
  const history = Array.from({ length: Number(period) }, (_, i) => ({
    day: new Date(
      Date.UTC(2026, 10, 7 - Number(period) + 1 + i),
    ).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'short',
      timeZone: 'UTC',
    }),
    cpu: Math.round(
      avg('cpu') - 8 + Math.sin(i * 0.8) * 7 + (i / Number(period)) * 8,
    ),
    memory: Math.round(
      avg('memory') - 5 + Math.cos(i * 0.6) * 4 + (i / Number(period)) * 5,
    ),
  }));
  function download() {
    const data = [
      ['รายงานข้อมูลจำลอง Data Center', site, period + ' วัน'],
      [
        'ศูนย์ข้อมูล',
        'Servers',
        'Online',
        'CPU %',
        'Memory %',
        'Storage %',
        'Cost THB/month',
      ],
      ...rows.map((x) => [
        x.name,
        x.servers,
        x.online,
        x.cpu,
        x.memory,
        x.storage,
        x.cost,
      ]),
    ];
    const blob = new Blob(
      ['\ufeff' + data.map((r) => r.join(',')).join('\n')],
      { type: 'text/csv;charset=utf-8;' },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'datacenter-demo-report.csv';
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
  }
  return (
    <main className="exec">
      <div className="exec-concept">
        <a href="/templates/dashboard">
          <ArrowLeft size={13} /> กลับ Nick Studio
        </a>
        <span>EXECUTIVE DASHBOARD · ข้อมูลจำลอง ไม่เชื่อมต่อระบบจริง</span>
        <a href="/contact?template=dashboard">สนใจ Dashboard นี้ ↗</a>
      </div>
      <div className="exec-shell">
        <aside className="exec-sidebar">
          <a className="exec-logo" href="/demo/dashboard">
            <span>
              <Server size={22} />
            </span>
            nexus<span className="exec-logo-sub">DATA CENTER INTELLIGENCE</span>
          </a>
          <small>WORKSPACE</small>
          {[
            { name: 'ภาพรวม', icon: <LayoutDashboard size={17} /> },
            { name: 'ทรัพยากร', icon: <Server size={17} /> },
            { name: 'รายการติดตาม', icon: <Activity size={17} /> },
          ].map((x) => (
            <button
              className={view === x.name ? 'selected' : ''}
              onClick={() => setView(x.name)}
              key={x.name}
            >
              {x.icon}
              {x.name}
              {x.name === 'รายการติดตาม' && <b>{allAlerts.length}</b>}
            </button>
          ))}
          <div className="exec-side-note">
            <span className="exec-dot" /> DEMO ENVIRONMENT
            <p>
              ตัวอย่างข้อมูลเพื่อการนำเสนอ
              <br />
              ไม่ใช่สถานะระบบปัจจุบัน
            </p>
          </div>
          <a className="exec-back" href="/">
            เว็บไซต์โดย Nick Studio <ArrowUpRight size={14} />
          </a>
        </aside>
        <div className="exec-main">
          <header className="exec-header">
            <span>
              Workspace <ChevronRight size={13} /> Executive overview
            </span>
            <div>
              <span className="exec-avatar">N</span>
              <span>
                Executive view<small>Read-only demo</small>
              </span>
            </div>
          </header>
          <div className="exec-body">
            <div className="exec-title">
              <div>
                <span className="exec-overline">
                  INFRASTRUCTURE AT A GLANCE
                </span>
                <h1>
                  {view === 'ภาพรวม'
                    ? 'ภาพรวม Data Center'
                    : view === 'ทรัพยากร'
                      ? 'ทรัพยากรและขีดความสามารถ'
                      : 'ประเด็นที่ต้องติดตาม'}
                </h1>
                <p>มองเห็นภาพรวม เพื่อวางแผนและจัดลำดับการตัดสินใจ</p>
              </div>
              <button className="exec-export" onClick={download}>
                <Download size={15} /> ส่งออกรายงาน CSV
              </button>
            </div>
            <div className="exec-toolbar">
              <label>
                <Building2 size={15} /> ศูนย์ข้อมูล
                <select
                  value={site}
                  onChange={(e) => {
                    setSite(e.target.value);
                    setExported(false);
                  }}
                >
                  {['ทุกศูนย์ข้อมูล', ...facilities.map((x) => x.name)].map(
                    (x) => (
                      <option key={x}>{x}</option>
                    ),
                  )}
                </select>
              </label>
              <label>
                <Clock size={15} /> ช่วงเวลาจำลอง
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="7">7 วัน</option>
                  <option value="30">30 วัน</option>
                </select>
              </label>
              <span>Snapshot · 7 พ.ย. 2026</span>
            </div>
            {exported && (
              <p className="exec-exported" role="status">
                สร้างไฟล์รายงานข้อมูลจำลองแล้ว · ช่วงเวลามีผลต่อกราฟแนวโน้ม ส่วน
                KPI และ CSV เป็นข้อมูล Snapshot
              </p>
            )}
            {view !== 'รายการติดตาม' && (
              <>
                <div className="exec-kpis">
                  {[
                    {
                      label: 'เครื่องที่ Online',
                      value: total.online.toLocaleString(),
                      unit: '/ ' + total.servers + ' เครื่อง',
                      note: `${((total.online / total.servers) * 100).toFixed(1)}% ของเครื่องทั้งหมด`,
                      icon: <Server size={18} />,
                      color: 'blue',
                    },
                    {
                      label: 'CPU เฉลี่ยถ่วงน้ำหนัก',
                      value: avg('cpu'),
                      unit: '%',
                      note: 'ถ่วงน้ำหนักตามจำนวนเครื่อง',
                      icon: <Activity size={18} />,
                      color: 'purple',
                    },
                    {
                      label: 'ค่าใช้จ่ายต่อเดือน',
                      value: '฿' + Math.round(total.cost / 1000) + 'k',
                      unit: '',
                      note: 'ประมาณการจำลอง ณ Snapshot',
                      icon: <Building2 size={18} />,
                      color: 'green',
                    },
                    {
                      label: 'รายการที่ต้องติดตาม',
                      value: allAlerts.filter(
                        (x) => site === 'ทุกศูนย์ข้อมูล' || x.site === site,
                      ).length,
                      unit: 'รายการ',
                      note: 'ใช้ประกอบการวางแผนติดตาม',
                      icon: <AlertTriangle size={18} />,
                      color: 'orange',
                    },
                  ].map((x) => (
                    <article key={x.label}>
                      <div>
                        <span>{x.label}</span>
                        <i className={x.color}>{x.icon}</i>
                      </div>
                      <strong>
                        {x.value}
                        <small>{x.unit}</small>
                      </strong>
                      <p>{x.note}</p>
                    </article>
                  ))}
                </div>
                <div className="exec-chart-grid">
                  <section className="exec-panel">
                    <div className="exec-panel-head">
                      <div>
                        <h2>แนวโน้มการใช้ทรัพยากร</h2>
                        <p>ตัวอย่างการเปลี่ยนแปลงในช่วง {period} วัน · %</p>
                      </div>
                      <span className="exec-pill">SIMULATED</span>
                    </div>
                    <div className="exec-chart">
                      <ResponsiveContainer
                        width="100%"
                        height="100%"
                        initialDimension={{ width: 800, height: 260 }}
                      >
                        <AreaChart
                          data={history}
                          margin={{ left: -25, right: 15, top: 10 }}
                        >
                          <defs>
                            <linearGradient
                              id="cpuFill"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#5578ed"
                                stopOpacity={0.2}
                              />
                              <stop
                                offset="100%"
                                stopColor="#5578ed"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="#e9edf4"
                          />
                          <XAxis
                            dataKey="day"
                            tick={{ fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                            interval={Number(period) === 7 ? 0 : 5}
                          />
                          <YAxis
                            domain={[0, 100]}
                            tick={{ fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <Tooltip />
                          <Legend
                            iconType="circle"
                            wrapperStyle={{ fontSize: 11 }}
                          />
                          <Area
                            dataKey="cpu"
                            name="CPU"
                            stroke="#5578ed"
                            fill="url(#cpuFill)"
                            strokeWidth={2}
                            isAnimationActive={false}
                          />
                          <Area
                            dataKey="memory"
                            name="Memory"
                            stroke="#9c7bd8"
                            fill="transparent"
                            strokeWidth={2}
                            isAnimationActive={false}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </section>
                  <section className="exec-panel">
                    <div className="exec-panel-head">
                      <div>
                        <h2>พื้นที่จัดเก็บข้อมูล</h2>
                        <p>สัดส่วนที่ใช้งาน ณ Snapshot</p>
                      </div>
                    </div>
                    <div className="exec-storage">
                      {rows.map((x) => (
                        <div key={x.name}>
                          <div>
                            <span>{x.name}</span>
                            <b>{x.storage}%</b>
                          </div>
                          <div className="exec-track">
                            <span
                              style={{
                                width: x.storage + '%',
                                background:
                                  x.storage >= 75 ? '#da9b4e' : '#6680de',
                              }}
                            />
                          </div>
                          <small>
                            {x.storage >= 75
                              ? 'ควรติดตามการเติบโต'
                              : 'ยังมีพื้นที่รองรับการใช้งาน'}
                          </small>
                        </div>
                      ))}
                    </div>
                    <div className="exec-capacity-note">
                      <CheckCircle2 size={16} />
                      <span>เกณฑ์สาธิต: ติดตามเมื่อใช้งาน ≥75%</span>
                    </div>
                  </section>
                </div>
              </>
            )}
            {view !== 'รายการติดตาม' && (
              <section className="exec-panel exec-table-panel">
                <div className="exec-panel-head">
                  <div>
                    <h2>สถานะรายศูนย์ข้อมูล</h2>
                    <p>ข้อมูล Snapshot สำหรับภาพรวมผู้บริหาร</p>
                  </div>
                  <span className="exec-pill">{rows.length} FACILITIES</span>
                </div>
                <div className="exec-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>ศูนย์ข้อมูล</th>
                        <th>สถานะเครื่อง</th>
                        <th>CPU</th>
                        <th>Memory</th>
                        <th>กำลังไฟฟ้า</th>
                        <th>ค่าใช้จ่าย / เดือน</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((x) => (
                        <tr key={x.name}>
                          <td>
                            <strong>{x.name}</strong>
                            <small>{x.servers} servers</small>
                          </td>
                          <td>
                            <span
                              className={
                                'exec-status ' +
                                (x.online === x.servers ? 'ok' : 'watch')
                              }
                            >
                              {x.online === x.servers
                                ? 'Online ครบ'
                                : 'ต้องติดตาม'}
                            </span>
                            <small>
                              {x.online} / {x.servers} online
                            </small>
                          </td>
                          <td>{x.cpu}%</td>
                          <td>{x.memory}%</td>
                          <td>{x.power} kW</td>
                          <td>฿{x.cost.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
            {view !== 'ทรัพยากร' && (
              <section className="exec-panel exec-alert-panel">
                <div className="exec-panel-head">
                  <div>
                    <h2>รายการที่ต้องติดตาม</h2>
                    <p>
                      ตัวอย่างประเด็นและผู้รับผิดชอบ ไม่ใช่ระบบแจ้งเตือนจริง
                    </p>
                  </div>
                  <label className="exec-alert-filter">
                    ระดับ
                    <select
                      value={severity}
                      onChange={(e) => setSeverity(e.target.value)}
                    >
                      {['ทั้งหมด', 'สูง', 'กลาง'].map((x) => (
                        <option key={x}>{x}</option>
                      ))}
                    </select>
                  </label>
                </div>
                {alerts.length ? (
                  alerts.map((x) => (
                    <div className="exec-alert" key={x.id}>
                      <span
                        className={
                          'exec-alert-icon ' +
                          (x.level === 'สูง' ? 'high' : 'medium')
                        }
                      >
                        <AlertTriangle size={17} />
                      </span>
                      <div>
                        <b>{x.title}</b>
                        <small>
                          {x.id} · {x.site} · {x.owner}
                        </small>
                      </div>
                      <span className="exec-status watch">{x.status}</span>
                    </div>
                  ))
                ) : (
                  <div className="exec-empty">
                    <CheckCircle2 size={26} />
                    <p>ไม่มีรายการในเงื่อนไขที่เลือก</p>
                  </div>
                )}
              </section>
            )}
            <footer className="exec-footer">
              <span>
                ข้อมูลทั้งหมดเป็นข้อมูลจำลองสำหรับแสดงแนวทาง UI ·
                ไม่ใช่ผลงานหรือข้อมูลลูกค้าจริง
              </span>
              <a href="/contact?template=dashboard">
                ปรับ Dashboard ให้ธุรกิจคุณ <ArrowUpRight size={14} />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

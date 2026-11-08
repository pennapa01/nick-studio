import ResponsiveImage from './responsive-image';
import type { Template } from '../data/templates';
export function MiniSite({
  t,
  large = false,
}: {
  t: Template;
  large?: boolean;
}) {
  if (t.id === 'dashboard')
    return (
      <div className="mini-frame">
        <div className="mini dash-mini">
          <div className="dash-mini-side">
            nexus
            <span>
              ◫ Overview
              <br />▤ Resources
              <br />◷ Action items
            </span>
          </div>
          <div className="dash-mini-main">
            <small>EXECUTIVE OVERVIEW</small>
            <h3>Data Center Overview</h3>
            <div className="dash-mini-kpis">
              <b>
                397<small>ONLINE SERVERS</small>
              </b>
              <b>
                56%<small>CPU UTILIZATION</small>
              </b>
              <b>
                3<small>ACTION ITEMS</small>
              </b>
            </div>
            <div className="dash-mini-graph">
              Resource trends
              <div>
                {[45, 60, 55, 70, 64, 77, 65, 82, 72, 86, 78, 90].map(
                  (h, i) => (
                    <i key={i} style={{ height: h + '%' }} />
                  ),
                )}
              </div>
            </div>
            <div className="dash-mini-foot">
              Bangkok DC　● Online
              <br />
              Regional DC　● Online
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="mini-frame">
      <div className={'mini ' + t.id + (large ? ' large' : '')}>
        <div className="mini-nav">
          <b>
            {t.name}
            <span> · </span>
          </b>
          {large ? (
            <span>
              <a href="#story">Our story</a>　<a href="#explore">Explore</a>　
              <a href="#demo-contact">Contact ↗</a>
            </span>
          ) : (
            <span>Our story　 Explore　 Contact ↗</span>
          )}
        </div>
        <div className="mini-body">
          <small>{t.en}</small>
          <h3>{t.headline}</h3>
          <p>{t.sub}</p>
          {large ? (
            <a href="#explore" className="mini-cta">
              {t.id === 'stay'
                ? 'สำรวจห้องพัก'
                : t.id === 'cafe'
                  ? 'Discover our menu'
                  : 'ดูบริการของเรา'}{' '}
              ↗
            </a>
          ) : (
            <span className="mini-cta">
              {t.id === 'stay'
                ? 'สำรวจห้องพัก'
                : t.id === 'cafe'
                  ? 'Discover our menu'
                  : 'ดูบริการของเรา'}{' '}
              ↗
            </span>
          )}
        </div>
        <div className="scene">
          <ResponsiveImage
            src={'/' + t.id + '.jpg'}
            alt={
              t.id === 'cafe'
                ? 'กาแฟสำหรับเว็บไซต์ตัวอย่าง'
                : t.id === 'stay'
                  ? 'อาคารที่พักสำหรับเว็บไซต์ตัวอย่าง'
                  : 'บ้านสำหรับเว็บไซต์ตัวอย่าง'
            }
            loading="lazy"
          />
        </div>
        <div className="mini-bottom">
          {t.items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
const slugs = ['dashboard', 'service', 'cafe', 'stay', 'florist'];
const routes = [
  '',
  'contact',
  ...slugs.flatMap((s) => ['templates/' + s, 'demo/' + s]),
];
const titles = new Set();
let assets = 0;
for (const route of routes) {
  const html = await fs.readFile(path.join('out', route, 'index.html'), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title, `${route}: missing title`);
  assert.ok(!titles.has(title), `${route}: duplicate title`);
  titles.add(title);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  if (route.startsWith('demo/'))
    assert.match(html, /<meta name="robots" content="noindex/);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
    const url = decodeURIComponent(match[1]);
    if (url.startsWith('//')) continue;
    const target = path.join('out', url);
    let exists = false;
    for (const candidate of [target, path.join(target, 'index.html')])
      try {
        if ((await fs.stat(candidate)).isFile()) {
          exists = true;
          break;
        }
      } catch {}
    assert.ok(exists, `${route}: broken local URL ${url}`);
    assets++;
  }
  if (route === 'contact') {
    assert.match(html, /name="contact"/);
    assert.match(html, /mailto:pennapa/);
    assert.doesNotMatch(html, /id="pricing"/);
  }
}
const sitemap = await fs.readFile('out/sitemap.xml', 'utf8');
assert.ok(!sitemap.includes('/demo/'));
if (process.env.NEXT_PUBLIC_SITE_URL) {
  assert.ok(!sitemap.includes('localhost'));
  assert.match(sitemap, /<loc>/);
}
console.log(
  `Verified ${routes.length} routes, unique titles, contact form, robots, sitemap and ${assets} local references.`,
);

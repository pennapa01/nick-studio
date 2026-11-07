import type { MetadataRoute } from 'next';
import { templates } from '../data/templates';
import { siteUrl } from '../lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    '/',
    '/contact/',
    ...templates.map((t) => '/templates/' + t.id + '/'),
  ].map((path) => ({ url: new URL(path, siteUrl).href }));
}

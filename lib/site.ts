const raw = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = raw ? new URL(raw) : undefined;
if (siteUrl && !['http:', 'https:'].includes(siteUrl.protocol))
  throw new Error('NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL');

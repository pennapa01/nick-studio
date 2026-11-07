import type { Metadata } from 'next';
import { templates } from '../../../data/templates';
import View from '../../../components/demo-page';
export function generateStaticParams() {
  return ['dashboard', 'service', 'cafe', 'stay', 'florist'].map((slug) => ({
    slug,
  }));
}
export const dynamicParams = false;
export default function Page() {
  return <View />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = templates.find((t) => t.id === slug);
  return {
    title: t ? 'ทดลองเว็บไซต์ ' + t.name : 'ไม่พบตัวอย่าง',
    description: t?.desc,
    alternates: { canonical: '/demo/' + slug + '/' },
    openGraph: { title: t?.name, description: t?.desc },
  };
}

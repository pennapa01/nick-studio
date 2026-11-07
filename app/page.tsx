import type { Metadata } from 'next';
import Portfolio from '../components/portfolio';
export const metadata: Metadata = { alternates: { canonical: '/' } };
export default function Page() {
  return <Portfolio />;
}

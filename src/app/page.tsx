import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect root to default language
  redirect('/en');
}

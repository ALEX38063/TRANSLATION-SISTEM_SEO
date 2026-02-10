import { notFound } from 'next/navigation';
import { Header, Footer, StickyActionBar } from '@/components';
import { i18n, Locale } from '@/lib/i18n';

interface LangLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
    const { lang } = await params;

    // Validate language
    if (!i18n.locales.includes(lang as Locale)) {
        notFound();
    }

    const locale = lang as Locale;

    return (
        <div lang={locale}>
            <Header lang={locale} />
            <main>{children}</main>
            <Footer lang={locale} />
            <StickyActionBar lang={locale} />
        </div>
    );
}

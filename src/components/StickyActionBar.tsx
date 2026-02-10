'use client';

import { Locale, getTranslation } from '@/lib/i18n';
import { Phone, Upload, MessageCircle } from 'lucide-react';

interface StickyActionBarProps {
    lang: Locale;
    phoneNumber?: string;
    whatsappNumber?: string;
}

export function StickyActionBar({
    lang,
    phoneNumber = '+442012345678',
    whatsappNumber = '+442012345678',
}: StickyActionBarProps) {
    const t = getTranslation(lang);

    return (
        <div className="sticky-action-bar">
            <a
                href={`tel:${phoneNumber}`}
                className="action-btn"
                aria-label={t.call}
            >
                <Phone className="w-5 h-5" />
                <span>{t.call}</span>
            </a>

            <button
                className="action-btn primary"
                aria-label={t.uploadDocument}
                onClick={() => {
                    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <Upload className="w-5 h-5" />
                <span>{lang === 'ru' ? 'Загрузить' : 'Upload'}</span>
            </button>

            <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
                aria-label={t.whatsapp}
            >
                <MessageCircle className="w-5 h-5" />
                <span>{t.whatsapp}</span>
            </a>
        </div>
    );
}

export default StickyActionBar;

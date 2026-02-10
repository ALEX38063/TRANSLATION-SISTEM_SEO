import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = 'GBP'): string {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency,
    }).format(amount);
}

export function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-GB').format(num);
}

export function parseServiceCitySlug(slug: string): { serviceSlug: string; citySlug: string } | null {
    const lastDashIndex = slug.lastIndexOf('-');
    if (lastDashIndex === -1) return null;

    const serviceSlug = slug.substring(0, lastDashIndex);
    const citySlug = slug.substring(lastDashIndex + 1);

    if (!serviceSlug || !citySlug) return null;

    return { serviceSlug, citySlug };
}

export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export function calculateWordCount(text: string): number {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

export function calculatePageCount(wordCount: number, wordsPerPage: number = 250): number {
    return Math.ceil(wordCount / wordsPerPage);
}

export function calculateEstimatedPrice(pageCount: number, pricePerPage: number): number {
    return pageCount * pricePerPage;
}

export function getCountryName(code: string): string {
    const countries: Record<string, string> = {
        GB: 'United Kingdom',
        DE: 'Germany',
        FR: 'France',
        NL: 'Netherlands',
        ES: 'Spain',
        IT: 'Italy',
        PL: 'Poland',
        AT: 'Austria',
        CH: 'Switzerland',
        BE: 'Belgium',
        PT: 'Portugal',
        IE: 'Ireland',
        CZ: 'Czech Republic',
    };
    return countries[code] || code;
}

export function getCountryFlag(code: string): string {
    const codePoints = code
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
}

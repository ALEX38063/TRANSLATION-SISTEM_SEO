'use client';

import { useState, useCallback } from 'react';
import { Location, Service } from '@prisma/client';
import { GlassCard, GlassButton, GlassInput } from '@/components/ui';
import { Locale, getTranslation, getLocalizedField, getLocalizedLocationName } from '@/lib/i18n';
import { formatCurrency, calculateWordCount, calculatePageCount, calculateEstimatedPrice } from '@/lib/utils';
import { Upload, FileText, Calculator, ArrowRight } from 'lucide-react';

interface OcrCalculatorProps {
    location: Location;
    service: Service;
    lang: Locale;
}

export function OcrCalculator({ location, service, lang }: OcrCalculatorProps) {
    const t = getTranslation(lang);
    const cityName = getLocalizedLocationName(location, lang);
    const serviceName = getLocalizedField(service, lang);

    const [text, setText] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const wordCount = calculateWordCount(text);
    const pageCount = calculatePageCount(wordCount);
    const estimatedPrice = calculateEstimatedPrice(pageCount, Number(service.pricePerPage));

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            // Placeholder for OCR processing
            setIsCalculating(true);
            setTimeout(() => {
                setText('Sample extracted text from document. The AI OCR system would process your uploaded document and extract the text content for accurate word counting and price estimation.');
                setIsCalculating(false);
            }, 1500);
        }
    }, []);

    const handleFileSelect = useCallback(() => {
        // Placeholder for file input
        setIsCalculating(true);
        setTimeout(() => {
            setText('Sample extracted text from your document. Our AI-powered OCR system analyzes your uploaded files to provide accurate word counts and pricing estimates.');
            setIsCalculating(false);
        }, 1500);
    }, []);

    return (
        <section className="section" id="calculator">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">{t.calculatorTitle}</h2>
                    <p className="section-subtitle mx-auto">{t.calculatorSubtitle}</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <GlassCard className="calculator-card" padding="lg">
                        {/* Service info */}
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                            <div>
                                <div className="text-sm text-white/60">
                                    {lang === 'ru' ? 'Выбранная услуга' : 'Selected service'}
                                </div>
                                <div className="text-lg font-semibold text-white">{serviceName}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-white/60">{t.perPage}</div>
                                <div className="text-lg font-semibold text-white">
                                    {formatCurrency(Number(service.pricePerPage))}
                                </div>
                            </div>
                        </div>

                        {/* Drop zone */}
                        <div
                            className={`drop-zone mb-6 ${isDragging ? 'active' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={handleFileSelect}
                        >
                            {isCalculating ? (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 border-4 border-white/20 border-t-white/80 rounded-full animate-spin" />
                                    <span className="text-white/70">{t.calculating}</span>
                                </div>
                            ) : (
                                <>
                                    <Upload className="w-12 h-12 text-white/40 mx-auto mb-4" />
                                    <p className="text-white/70 mb-2">{t.dragDrop}</p>
                                    <p className="text-sm text-white/50">{t.orBrowse}</p>
                                </>
                            )}
                        </div>

                        {/* Manual text input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-white/80 mb-2">
                                {lang === 'ru' ? 'Или введите текст вручную' : 'Or paste text manually'}
                            </label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder={lang === 'ru' ? 'Вставьте текст для расчёта...' : 'Paste text to calculate...'}
                                className="glass-input w-full h-32 resize-none"
                            />
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 rounded-xl bg-white/5">
                                <FileText className="w-5 h-5 text-white/60 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white">{wordCount}</div>
                                <div className="text-xs text-white/60">{t.wordCount}</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5">
                                <Calculator className="w-5 h-5 text-white/60 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white">{pageCount}</div>
                                <div className="text-xs text-white/60">{t.pageCount}</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20">
                                <div className="text-2xl font-bold text-white">
                                    {formatCurrency(estimatedPrice)}
                                </div>
                                <div className="text-xs text-white/60">{t.estimatedCost}</div>
                            </div>
                        </div>

                        {/* Location-specific note */}
                        <p className="text-sm text-white/50 text-center mb-6">
                            {lang === 'ru'
                                ? `Цены для ${cityName}. Окончательная стоимость после анализа документа.`
                                : `Prices for ${cityName}. Final cost after document analysis.`}
                        </p>

                        {/* CTA */}
                        <GlassButton
                            variant="primary"
                            size="lg"
                            fullWidth
                            icon={<ArrowRight className="w-5 h-5" />}
                        >
                            {t.getQuote}
                        </GlassButton>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}

export default OcrCalculator;

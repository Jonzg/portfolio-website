import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const heroTexts = {
    en: {
        title: 'Data Scientist\n& AI Engineer',
        tagline: 'End-to-end: ETL, predictive modelling, deployment & applied research.',
        viewProjects: 'View Projects',
        contact: 'Contact',
        downloadCV: 'Download CV',
    },
    es: {
        title: 'Data Scientist\n& AI Engineer',
        tagline: 'De extremo a extremo: ETL, modelado predictivo, despliegue y research aplicado.',
        viewProjects: 'Ver Proyectos',
        contact: 'Contacto',
        downloadCV: 'Descargar CV',
    }
};

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const t = heroTexts[language];
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = revealRef.current;
        if (!el) return;
        // Hero is always visible on load — trigger immediately
        const timer = setTimeout(() => el.classList.add('visible'), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-16">
            <div ref={revealRef} className="reveal text-center max-w-3xl mx-auto space-y-8">
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 tracking-widest uppercase">
                    Jon Zorrilla Gamboa
                </p>
                <h1 className="text-5xl md:text-7xl font-mono font-bold text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight whitespace-pre-line">
                    {t.title}
                </h1>
                <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
                    {t.tagline}
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <a
                        href="#projects"
                        className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 transition-colors duration-300"
                    >
                        {t.viewProjects}
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-300"
                    >
                        {t.contact}
                    </a>
                    <a
                        href={language === 'en' ? '/CV_jz_en.pdf' : '/CV_jz_es.pdf'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 text-sm font-medium rounded hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        {t.downloadCV}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

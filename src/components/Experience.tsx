// src/components/Experience.tsx

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Ajusta este valor para cambiar el tamaño de todos los logos (Tailwind w-/h-)
const LOGO_SIZE = 'w-24 h-24';

// Logos de empresa — object-contain para normalizar tamaños
const companyLogos: Record<string, { src: string; alt: string }> = {
    'Ayesa': { src: '/images/i3b-ibermatica.jpg', alt: 'i3B Ibermática logo' },
    'Hubbell': { src: '/images/Hubbell.png', alt: 'Hubbell logo' },
    'EDP Energy': { src: '/images/Edp.png', alt: 'EDP Energy logo' },
};

const experienceData = {
    en: [
        {
            company: 'Ayesa',
            linkedin: 'https://www.linkedin.com/company/ayesa/',
            position: 'Data Scientist at the Ibermática Innovation Institute (i3B)',
            location: 'Greater Bilbao metropolitan area',
            years: 'Feb 2024 – Present',
            description: 'R&D in applied AI at national and European level. Research on new algorithms, data analysis and processing, predictive model development, and results communication.',
        },
        {
            company: 'Hubbell',
            linkedin: 'https://www.linkedin.com/company/hubbellincorporated/',
            position: 'Research Data Scientist',
            location: 'Bilbao',
            years: 'Oct 2023 – Feb 2024',
            description: "Master's Thesis in Data Science: ML-based missing value imputation in smart meter (AMI) time series applied to real electricity sector data.",
        },
        {
            company: 'EDP Energy',
            linkedin: 'https://www.linkedin.com/company/edp/',
            position: 'Data Scientist',
            location: 'Bilbao',
            years: 'Apr 2022 – Jul 2022',
            description: 'Internship in the BI & Big Data department. ML model development for commercial energy analytics and research into Open Data systems.',
        },
    ],
    es: [
        {
            company: 'Ayesa',
            linkedin: 'https://www.linkedin.com/company/ayesa/',
            position: 'Científico de datos en el Instituto de Ibermática de Innovación (i3B)',
            location: 'Bilbao',
            years: 'Feb 2024 – Actualidad',
            description: 'I+D en IA aplicada a escala nacional y europea. Investigación en nuevos algoritmos, análisis y procesamiento de datos, creación de modelos predictivos y comunicación de resultados.',
        },
        {
            company: 'Hubbell',
            linkedin: 'https://www.linkedin.com/company/hubbellincorporated/',
            position: 'Científico de datos',
            location: 'Bilbao',
            years: 'Oct 2023 – Feb 2024',
            description: 'Trabajo de Fin de Máster en Ciencia de Datos: imputación de valores faltantes con ML en series temporales de smart meters (AMI) aplicada a datos reales del sector eléctrico.',
        },
        {
            company: 'EDP Energy',
            linkedin: 'https://www.linkedin.com/company/edp/',
            position: 'Científico de datos',
            location: 'Bilbao',
            years: 'Abr 2022 – Jul 2022',
            description: 'Prácticas en el departamento de BI y Big Data. Creación y optimización de modelos ML para negocios de energía e investigación de sistemas Open Data.',
        },
    ],
};

const sectionTitles = {
    en: 'Experience',
    es: 'Experiencia',
};

const Experience: React.FC = () => {
    const { language } = useLanguage();
    const experiences = experienceData[language];
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = revealRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
            { threshold: 0.05 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="py-24 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={revealRef} className="reveal">
                    <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-12">
                        {sectionTitles[language]}
                    </h2>
                    <div className="space-y-4">
                        {experiences.map((exp, index) => {
                            const logo = companyLogos[exp.company];
                            return (
                                <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        {/* Logo badge */}
                                        {logo && (
                                            <div className={`${LOGO_SIZE} flex-shrink-0 overflow-hidden`}>
                                                <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                                                <h3 className="text-zinc-50 font-semibold leading-snug">{exp.position}</h3>
                                                <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">{exp.years}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <a
                                                    href={exp.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 cursor-pointer"
                                                >
                                                    {exp.company}
                                                </a>
                                                {exp.location && (
                                                    <>
                                                        <span className="text-zinc-700">·</span>
                                                        <span className="text-zinc-500 text-sm">{exp.location}</span>
                                                    </>
                                                )}
                                            </div>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

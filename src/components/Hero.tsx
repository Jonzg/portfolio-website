import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const heroTexts = {
    en: {
        status: 'Open to new opportunities',
        title: 'Data Scientist\n& AI Engineer',
        tagline: 'End-to-end: ETL, predictive modelling, deployment & applied research.',
        viewProjects: 'View Projects',
        contact: 'Contact',
    },
    es: {
        status: 'Disponible para nuevas oportunidades',
        title: 'Data Scientist\n& AI Engineer',
        tagline: 'De extremo a extremo: ETL, modelado predictivo, despliegue y research aplicado.',
        viewProjects: 'Ver Proyectos',
        contact: 'Contacto',
    }
};

/* Variantes de animación para el hero */
const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const photoVariant = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const t = heroTexts[language];

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-16 overflow-hidden">
            {/* Dot grid background */}
            <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
            {/* Radial fade mask */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #09090b 100%)' }}
                aria-hidden="true"
            />

            <div className="relative w-full max-w-5xl mx-auto">
                {/* Layout: foto izquierda + texto derecha en desktop, columna en móvil */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

                    {/* Foto de perfil — izquierda */}
                    <motion.div
                        className="flex-shrink-0"
                        variants={photoVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <img
                            src="/Jon.jpg"
                            alt="Jon Zorrilla Gamboa"
                            className="w-56 h-80 md:w-64 md:h-96 rounded-xl object-cover object-top border border-zinc-800 shadow-xl"
                        />
                    </motion.div>

                    {/* Texto — derecha con stagger */}
                    <motion.div
                        className="flex flex-col gap-5 text-left"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Status badge */}
                        <motion.div variants={item} className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full px-3.5 py-1.5 w-fit hover:border-zinc-600 transition-colors duration-300 cursor-default">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
                            {t.status}
                        </motion.div>

                        {/* Name */}
                        <motion.p variants={item} className="text-xs font-mono text-blue-500 tracking-[0.25em] uppercase select-none">
                            Jon Zorrilla Gamboa
                        </motion.p>

                        {/* Title */}
                        <motion.h1 variants={item} className="text-4xl md:text-6xl font-mono font-bold text-zinc-50 leading-[1.05] tracking-tight whitespace-pre-line">
                            {t.title}
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p variants={item} className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
                            {t.tagline}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                            >
                                {t.viewProjects}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-lg hover:border-zinc-500 hover:text-zinc-50 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                            >
                                {t.contact}
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

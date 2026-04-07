import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const aboutTexts = {
    en: {
        sectionTitle: 'About',
        body: 'Based in Bilbao, Basque Country. I cover the full data pipeline — ETL, exploratory analysis, predictive modelling, deployment, and applied research. My Physics background provides rigorous analytical foundations; hands-on industrial AI projects have sharpened my focus on production-ready results. I work across process mining, supervised learning, anomaly detection, time series forecasting, and API orchestration.',
    },
    es: {
        sectionTitle: 'Sobre mí',
        body: 'Con base en Bilbao, País Vasco. Cubro el pipeline completo de datos: ETL, análisis exploratorio, modelado predictivo, despliegue e investigación aplicada. Mi formación en Física aporta una base analítica rigurosa; los proyectos de IA industrial han afinado mi enfoque hacia resultados que funcionan en producción. Trabajo en process mining, aprendizaje supervisado, detección de anomalías, predicción de series temporales y orquestación de APIs.',
    }
};

const About: React.FC = () => {
    const { language } = useLanguage();
    const t = aboutTexts[language];

    return (
        <section id="about" className="py-24 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-10">
                        {t.sectionTitle}
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed text-justify">
                        {t.body}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

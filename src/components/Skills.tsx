import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const skillCategories = {
    en: [
        {
            title: 'Languages',
            items: ['Python', 'R', 'SQL', 'Fortran'],
        },
        {
            title: 'ML / Data Science',
            items: ['NumPy', 'Pandas', 'scikit-learn', 'CatBoost', 'LightGBM', 'H2O AutoML', 'Optuna', 'PyTorch', 'TensorFlow', 'PySpark', 'pm4py', 'Matplotlib', 'Seaborn'],
        },
        {
            title: 'MLOps / Deployment',
            items: ['MLflow', 'FastAPI', 'Git', 'Azure', 'Docker'],
        },
        {
            title: 'Tools',
            items: ['LaTeX', 'OpenCV', 'MATLAB', 'SAS', 'Power BI', 'Microsoft Office'],
        },
    ],
    es: [
        {
            title: 'Lenguajes',
            items: ['Python', 'R', 'SQL', 'Fortran'],
        },
        {
            title: 'ML / Ciencia de Datos',
            items: ['NumPy', 'Pandas', 'scikit-learn', 'CatBoost', 'LightGBM', 'H2O AutoML', 'Optuna', 'PyTorch', 'TensorFlow', 'PySpark', 'pm4py', 'Matplotlib', 'Seaborn'],
        },
        {
            title: 'MLOps / Despliegue',
            items: ['MLflow', 'FastAPI', 'Git', 'Azure', 'Docker'],
        },
        {
            title: 'Herramientas',
            items: ['LaTeX', 'OpenCV', 'MATLAB', 'SAS', 'Power BI', 'Microsoft Office'],
        },
    ],
};

const sectionTitles = {
    en: 'Skills',
    es: 'Competencias',
};

const Skills: React.FC = () => {
    const { language } = useLanguage();
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
        <section id="skills" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={revealRef} className="reveal">
                    <h2 className="text-3xl font-mono font-bold text-zinc-900 dark:text-zinc-50 mb-12">
                        {sectionTitles[language]}
                    </h2>
                    <div className="space-y-8">
                        {skillCategories[language].map((category, idx) => (
                            <div key={idx}>
                                <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">
                                    {category.title}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, i) => (
                                        <span key={i} className="tag">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

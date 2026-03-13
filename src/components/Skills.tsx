import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
    SiPython, SiR, SiNumpy, SiPandas, SiScikitlearn,
    SiPytorch, SiTensorflow, SiApachespark,
    SiMlflow, SiFastapi, SiGit, SiDocker,
    SiLatex, SiOpencv,
} from 'react-icons/si';

const techIcons: Record<string, React.ReactElement> = {
    'Python':       <SiPython />,
    'R':            <SiR />,
    'NumPy':        <SiNumpy />,
    'Pandas':       <SiPandas />,
    'scikit-learn': <SiScikitlearn />,
    'PyTorch':      <SiPytorch />,
    'TensorFlow':   <SiTensorflow />,
    'PySpark':      <SiApachespark />,
    'MLflow':       <SiMlflow />,
    'FastAPI':      <SiFastapi />,
    'Git':          <SiGit />,
    'Docker':       <SiDocker />,
    'LaTeX':        <SiLatex />,
    'OpenCV':       <SiOpencv />,
};

const skillCategories = {
    en: [
        {
            title: 'Languages',
            items: ['Python', 'R', 'SQL', 'Fortran'],
            accent: 'bg-blue-500',
        },
        {
            title: 'ML / Data Science',
            items: ['NumPy', 'Pandas', 'scikit-learn', 'CatBoost', 'LightGBM', 'H2O AutoML', 'Optuna', 'PyTorch', 'TensorFlow', 'PySpark', 'pm4py', 'Matplotlib', 'Seaborn'],
            accent: 'bg-violet-500',
        },
        {
            title: 'MLOps / Deployment',
            items: ['MLflow', 'FastAPI', 'Git', 'Azure', 'Docker'],
            accent: 'bg-emerald-500',
        },
        {
            title: 'Tools',
            items: ['LaTeX', 'OpenCV', 'MATLAB', 'SAS', 'Power BI', 'Microsoft Office'],
            accent: 'bg-amber-500',
        },
    ],
    es: [
        {
            title: 'Lenguajes',
            items: ['Python', 'R', 'SQL', 'Fortran'],
            accent: 'bg-blue-500',
        },
        {
            title: 'ML / Ciencia de Datos',
            items: ['NumPy', 'Pandas', 'scikit-learn', 'CatBoost', 'LightGBM', 'H2O AutoML', 'Optuna', 'PyTorch', 'TensorFlow', 'PySpark', 'pm4py', 'Matplotlib', 'Seaborn'],
            accent: 'bg-violet-500',
        },
        {
            title: 'MLOps / Despliegue',
            items: ['MLflow', 'FastAPI', 'Git', 'Azure', 'Docker'],
            accent: 'bg-emerald-500',
        },
        {
            title: 'Herramientas',
            items: ['LaTeX', 'OpenCV', 'MATLAB', 'SAS', 'Power BI', 'Microsoft Office'],
            accent: 'bg-amber-500',
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
        <section id="skills" className="py-24 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={revealRef} className="reveal">
                    <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-12">
                        {sectionTitles[language]}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skillCategories[language].map((category, idx) => (
                            <div
                                key={idx}
                                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
                            >
                                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className={`w-1.5 h-1.5 rounded-full ${category.accent} flex-shrink-0`} aria-hidden="true" />
                                    {category.title}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {category.items.map((item, i) => (
                                        <span key={i} className="tag inline-flex items-center gap-1">
                                            {techIcons[item] && (
                                                <span className="text-[0.75rem] opacity-70">{techIcons[item]}</span>
                                            )}
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

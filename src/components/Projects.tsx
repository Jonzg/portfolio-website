import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
    SiPython, SiReact, SiTypescript, SiTailwindcss, SiVite,
    SiFastapi, SiSqlite, SiPytorch, SiMlflow, SiPandas, SiScikitlearn,
} from 'react-icons/si';

// Mapa de tecnología → icono Simple Icons
// Las tecnologías sin icono se muestran solo como texto
const techIcons: Record<string, React.ReactElement> = {
    'Python':        <SiPython />,
    'React 18':      <SiReact />,
    'TypeScript':    <SiTypescript />,
    'Tailwind CSS':  <SiTailwindcss />,
    'Vite':          <SiVite />,
    'FastAPI':       <SiFastapi />,
    'SQLite':        <SiSqlite />,
    'PyTorch':       <SiPytorch />,
    'MLflow':        <SiMlflow />,
    'Pandas':        <SiPandas />,
    'scikit-learn':  <SiScikitlearn />,
};

interface Project {
    title: { en: string; es: string };
    problem: { en: string; es: string };
    approach: { en: string; es: string };
    bullets?: { en: string[]; es: string[] };
    technologies: string[];
    type: 'process-mining' | 'anomaly-detection' | 'classification' | 'mlops-api' | 'web-app' | 'quiz-app' | 'time-series';
    category: 'personal' | 'company';
    githubUrl?: string;
}

const projects: Project[] = [
    // — Proyectos personales —
    {
        title: {
            en: 'Portfolio Website',
            es: 'Sitio Web de Portfolio',
        },
        problem: {
            en: 'Personal portfolio to showcase data science and AI projects, skills, and experience to potential employers and collaborators.',
            es: 'Portfolio personal para mostrar proyectos de ciencia de datos e IA, habilidades y experiencia a empleadores y colaboradores.',
        },
        approach: {
            en: 'Single-page application built with React 18, TypeScript and Tailwind CSS. Dark-only design with Space Mono + IBM Plex Sans, bilingual ES/EN via Context API, scroll-reveal animations with IntersectionObserver, and Vite for bundling.',
            es: 'Aplicación de página única construida con React 18, TypeScript y Tailwind CSS. Diseño solo-oscuro con Space Mono + IBM Plex Sans, bilingüe ES/EN mediante Context API, animaciones scroll-reveal con IntersectionObserver y Vite para bundling.',
        },
        technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
        type: 'web-app',
        category: 'personal',
        githubUrl: 'https://github.com/Jonzg/portfolio-website',
    },
    {
        title: {
            en: 'AWS AI Practitioner Quiz',
            es: 'Quiz AWS AI Practitioner',
        },
        problem: {
            en: 'Full-stack study tool for the AWS Certified AI Practitioner exam, covering 241 questions across 13 AWS AI/ML service topics with real-time analytics.',
            es: 'Herramienta full-stack de estudio para el examen AWS Certified AI Practitioner, con 241 preguntas sobre 13 temas de servicios AWS AI/ML y analíticas en tiempo real.',
        },
        approach: {
            en: 'React 18 + Vite frontend with Recharts for performance analytics. FastAPI (Python 3.11) backend with SQLite for result storage. Customizable quiz (difficulty, question count, timer), CSV export, and 8 REST endpoints. Deployed on Vercel + Render.',
            es: 'Frontend React 18 + Vite con Recharts para analíticas de rendimiento. Backend FastAPI (Python 3.11) con SQLite para almacenar resultados. Quiz configurable (dificultad, cantidad de preguntas, temporizador), exportación a CSV y 8 endpoints REST. Desplegado en Vercel + Render.',
        },
        technologies: ['React 18', 'FastAPI', 'Python', 'SQLite', 'Recharts', 'Tailwind CSS'],
        type: 'quiz-app',
        category: 'personal',
        githubUrl: 'https://github.com/Jonzg/aws-quiz',
    },
    // — Proyectos empresariales (Ayesa i3B) —
    {
        title: {
            en: 'Predictive XAI Model — Nickel Concentration in Electroplating',
            es: 'Modelo Predictivo XAI — Concentración de Níquel en Galvanizado',
        },
        problem: {
            en: 'Predict nickel concentration in industrial electroplating baths to optimise process parameters and reduce defect rates in manufactured parts.',
            es: 'Predecir la concentración de níquel en baños de galvanizado industrial para optimizar parámetros de proceso y reducir la tasa de defectos en piezas fabricadas.',
        },
        approach: {
            en: 'ML regression pipeline (CatBoost, scikit-learn) with SHAP-based explainable AI to interpret model outputs. Results communicated to both technical teams and non-technical industrial stakeholders.',
            es: 'Pipeline de regresión ML (CatBoost, scikit-learn) con IA explicable basada en SHAP para interpretar los resultados del modelo. Hallazgos comunicados a equipos técnicos y perfiles no técnicos del sector industrial.',
        },
        bullets: {
            en: [
                'Developed ML models to predict nickel concentration in industrial galvanisation baths.',
                'Applied XAI techniques (SHAP) to interpret predictions and support process decisions.',
                'Communicated findings to both engineering teams and non-technical industrial stakeholders.',
            ],
            es: [
                'Desarrollo de modelos ML para predecir la concentración de níquel en baños de galvanizado industrial.',
                'Aplicación de técnicas XAI (SHAP) para interpretar predicciones y apoyar decisiones de proceso.',
                'Comunicación de resultados a equipos de ingeniería y perfiles no técnicos del sector industrial.',
            ],
        },
        technologies: ['Python', 'CatBoost', 'scikit-learn', 'SHAP', 'Pandas', 'Seaborn'],
        type: 'classification',
        category: 'company',
    },
    {
        title: {
            en: 'Deviation & Bottleneck Detection — Construction Projects (AEC)',
            es: 'Detección de Desviaciones y Cuellos de Botella — Construcción (AEC)',
        },
        problem: {
            en: 'Early identification of deviations, delays and bottlenecks in construction projects to support proactive decision-making in the AEC industry.',
            es: 'Identificación temprana de desviaciones, retrasos y cuellos de botella en proyectos de construcción para apoyar la toma de decisiones proactiva en la industria AEC.',
        },
        approach: {
            en: 'ML framework combining clustering (K-Means, DBSCAN), feature selection, anomaly detection and SHAP-based XAI. Clusters validated with Silhouette and Calinski-Harabasz indices.',
            es: 'Marco ML que combina clustering (K-Means, DBSCAN), selección de variables, detección de anomalías y XAI basado en SHAP. Clusters validados con índices Silhouette y Calinski-Harabasz.',
        },
        bullets: {
            en: [
                'Designed an end-to-end ML framework for early detection of deviations, delays, and bottlenecks.',
                'Applied clustering, feature selection, anomaly detection, and XAI to optimise decision-making.',
                'Integrated models into production environments within the AEC industry.',
            ],
            es: [
                'Diseño de un framework ML completo para la detección temprana de desviaciones, retrasos y cuellos de botella.',
                'Aplicación de clustering, selección de variables, detección de anomalías y XAI para optimizar la toma de decisiones.',
                'Integración de los modelos en entornos de producción dentro de la industria AEC.',
            ],
        },
        technologies: ['Python', 'scikit-learn', 'K-Means', 'DBSCAN', 'SHAP', 'Pandas'],
        type: 'anomaly-detection',
        category: 'company',
    },
    {
        title: {
            en: 'Predictive Modelling & Process Mining — Steel Production',
            es: 'Modelado Predictivo y Process Mining — Producción de Acero',
        },
        problem: {
            en: 'Optimise steel production quality and process routes through predictive modelling, route conformance analysis and synthetic data augmentation.',
            es: 'Optimizar la calidad y las rutas de proceso en producción de acero mediante modelado predictivo, análisis de conformidad de rutas y generación de datos sintéticos.',
        },
        approach: {
            en: 'Binary classification with variable analysis, process mining with fitness/precision conformance metrics via PM4Py, experiment tracking with MLflow, and synthetic data generation with VAEs and GANs.',
            es: 'Clasificación binaria con análisis de variables, process mining con métricas de conformidad (fitness/precision) vía PM4Py, seguimiento de experimentos con MLflow y generación de datos sintéticos con VAEs y GANs.',
        },
        bullets: {
            en: [
                'Binary classification and feature analysis for production quality prediction.',
                'Process mining with conformance metrics (fitness, precision) and flow visualisation via PM4Py.',
                'Built MLOps pipelines with MLflow for experiment tracking, model lifecycle automation, and hyperparameter tuning.',
                'Generated synthetic data with VAEs and GANs to improve model robustness on imbalanced datasets.',
            ],
            es: [
                'Clasificación binaria y análisis de variables para predicción de calidad en producción.',
                'Process mining con métricas de conformidad (fitness, precision) y visualización de flujos con PM4Py.',
                'Construcción de pipelines MLOps con MLflow para seguimiento de experimentos, automatización del ciclo de vida del modelo y ajuste de hiperparámetros.',
                'Generación de datos sintéticos con VAEs y GANs para mejorar la robustez del modelo en conjuntos de datos desbalanceados.',
            ],
        },
        technologies: ['Python', 'pm4py', 'MLflow', 'PyTorch', 'scikit-learn', 'VAE / GAN', 'Pandas'],
        type: 'process-mining',
        category: 'company',
    },
    {
        title: {
            en: 'Energy Consumption Forecasting — Smart Meter Time Series',
            es: 'Predicción de Consumo Energético — Series Temporales AMI',
        },
        problem: {
            en: 'Forecast short- and medium-term energy consumption from smart meter (AMI) time series, including missing value imputation in real electricity sector data.',
            es: 'Predecir el consumo energético a corto y medio plazo a partir de series temporales de smart meters (AMI), incluyendo imputación de valores faltantes en datos reales del sector eléctrico.',
        },
        approach: {
            en: 'End-to-end pipeline: data cleaning, outlier detection, and comparative evaluation of ARIMA, Prophet and LSTM models. ML-based imputation of missing values in AMI infrastructure data.',
            es: 'Pipeline completo: limpieza de datos, detección de outliers y evaluación comparativa de modelos ARIMA, Prophet y LSTM. Imputación de valores faltantes con ML en datos de infraestructura AMI.',
        },
        bullets: {
            en: [
                'Data analysis, cleaning, and outlier detection on real smart meter (AMI) time series.',
                'Comparative evaluation of ARIMA, Prophet, boosting models, and LSTM for energy forecasting.',
                'ML-based imputation of missing values in electricity sector infrastructure data (Master\'s Thesis at Hubbell).',
                'Contributed to the design of software components integrating predictive models into industrial systems, and to an MLOps architecture as the forecasting component owner.',
            ],
            es: [
                'Análisis, limpieza y detección de outliers en series temporales reales de smart meters (AMI).',
                'Evaluación comparativa de ARIMA, Prophet, modelos de boosting y LSTM para previsión energética.',
                'Imputación de valores faltantes con ML en datos de infraestructura del sector eléctrico (TFM en Hubbell).',
                'Contribución al diseño de componentes software que integran modelos predictivos en sistemas industriales, y a una arquitectura MLOps como responsable del componente de forecasting.',
            ],
        },
        technologies: ['Python', 'ARIMA', 'Prophet', 'LSTM', 'PyTorch', 'scikit-learn', 'Pandas'],
        type: 'time-series',
        category: 'company',
    },
];

const typeConfig: Record<Project['type'], { label: { en: string; es: string }; badge: string; accent: string }> = {
    'process-mining': {
        label: { en: 'Process Mining', es: 'Process Mining' },
        badge: 'text-violet-400 bg-violet-950/60 border-violet-800/60',
        accent: 'border-l-violet-500',
    },
    'anomaly-detection': {
        label: { en: 'Anomaly Detection', es: 'Detección de Anomalías' },
        badge: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
        accent: 'border-l-amber-500',
    },
    'classification': {
        label: { en: 'Classification', es: 'Clasificación' },
        badge: 'text-blue-400 bg-blue-950/60 border-blue-800/60',
        accent: 'border-l-blue-500',
    },
    'mlops-api': {
        label: { en: 'MLOps / API', es: 'MLOps / API' },
        badge: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
        accent: 'border-l-emerald-500',
    },
    'time-series': {
        label: { en: 'Time Series', es: 'Series Temporales' },
        badge: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60',
        accent: 'border-l-cyan-500',
    },
    'web-app': {
        label: { en: 'Web App', es: 'Aplicación Web' },
        badge: 'text-blue-400 bg-blue-950/60 border-blue-800/60',
        accent: 'border-l-blue-500',
    },
    'quiz-app': {
        label: { en: 'Quiz App', es: 'Quiz App' },
        badge: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
        accent: 'border-l-amber-500',
    },
};

const labels = {
    en: {
        sectionTitle: 'Projects',
        personalTitle: 'Personal projects',
        companyTitle: 'Company projects',
        problem: 'Problem',
        approach: 'Approach',
        // confidential: 'Confidential project',
        viewOnGithub: 'GitHub',
    },
    es: {
        sectionTitle: 'Proyectos',
        personalTitle: 'Proyectos personales',
        companyTitle: 'Proyectos empresariales',
        problem: 'Problema',
        approach: 'Enfoque',
        // confidential: 'Proyecto confidencial',
        viewOnGithub: 'GitHub',
    },
};

interface ProjectCardProps {
    project: Project;
    language: 'en' | 'es';
    l: typeof labels['en'];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, language, l }) => {
    const cfg = typeConfig[project.type];
    return (
        <div
            className={`group bg-zinc-900/50 border border-zinc-800 border-l-4 ${cfg.accent} rounded-lg p-6 flex flex-col hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-950/50 transition-all duration-300`}
        >
            <div className="flex items-start justify-between gap-3 mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border ${cfg.badge}`}>
                    {cfg.label[language]}
                </span>
                {project.category === 'company' ? (
                    <span className="text-xs font-mono text-zinc-600 border border-zinc-800 rounded px-2 py-0.5">
                    </span>
                ) : (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 border border-zinc-700 rounded px-2 py-0.5 hover:border-zinc-500 hover:text-zinc-200 transition-colors duration-200 cursor-pointer"
                    >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {l.viewOnGithub}
                    </a>
                )}
            </div>
            <h3 className="text-zinc-50 font-semibold text-base leading-snug mb-4">
                {project.title[language]}
            </h3>
            <div className="space-y-3 flex-1">
                <div>
                    <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">{l.problem}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{project.problem[language]}</p>
                </div>
                <div>
                    <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">{l.approach}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{project.approach[language]}</p>
                </div>
                {project.bullets && (
                    <ul className="space-y-1 mt-1">
                        {project.bullets[language].map((b, i) => (
                            <li key={i} className="text-zinc-400 text-sm leading-relaxed before:content-['—'] before:mr-2 before:text-zinc-700">
                                {b}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                    <span key={i} className="tag inline-flex items-center gap-1">
                        {techIcons[tech] && (
                            <span className="text-[0.75rem] opacity-70">{techIcons[tech]}</span>
                        )}
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const { language } = useLanguage();
    const l = labels[language];
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

    const personalProjects = projects.filter(p => p.category === 'personal');
    const companyProjects = projects.filter(p => p.category === 'company');

    return (
        <section id="projects" className="py-24 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={revealRef} className="reveal">
                    <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-12">
                        {l.sectionTitle}
                    </h2>

                    {/* Proyectos personales */}
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                        {l.personalTitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {personalProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} language={language} l={l} />
                        ))}
                    </div>

                    {/* Proyectos empresariales */}
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                        {l.companyTitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {companyProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} language={language} l={l} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

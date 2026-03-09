import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Project {
    title: { en: string; es: string };
    problem: { en: string; es: string };
    approach: { en: string; es: string };
    technologies: string[];
    type: 'process-mining' | 'anomaly-detection' | 'classification' | 'mlops-api';
}

const projects: Project[] = [
    {
        title: {
            en: 'Manufacturing Route Analysis Pipeline',
            es: 'Pipeline de Análisis de Rutas de Fabricación',
        },
        problem: {
            en: 'Analyse and optimise manufacturing routes in a steelmaking plant to identify bottlenecks and non-conforming flows.',
            es: 'Análisis y optimización de rutas de fabricación en planta siderúrgica para identificar cuellos de botella y flujos no conformes.',
        },
        approach: {
            en: 'Process mining with conformance metrics (fitness, precision), route similarity via Jaccard index, and flow visualisation. MLflow for experiment tracking.',
            es: 'Process mining con métricas de conformidad (fitness, precision), similitud de rutas con índice de Jaccard y visualización de flujos. MLflow para seguimiento de experimentos.',
        },
        technologies: ['Python', 'pm4py', 'MLflow', 'Pandas', 'Jaccard Similarity'],
        type: 'process-mining',
    },
    {
        title: {
            en: 'Clustering & Anomaly Detection in Industrial Production',
            es: 'Clustering y Detección de Anomalías en Producción Industrial',
        },
        problem: {
            en: 'Detect production anomalies and identify operational clusters in industrial sensor data without labelled ground truth.',
            es: 'Detectar anomalías de producción e identificar clusters operacionales en datos de sensores industriales sin etiquetas de referencia.',
        },
        approach: {
            en: 'Unsupervised learning (K-Means, DBSCAN) evaluated with Calinski-Harabasz, Silhouette and Davies-Bouldin indices for rigorous cluster validation.',
            es: 'Aprendizaje no supervisado (K-Means, DBSCAN) evaluado con índices Calinski-Harabasz, Silhouette y Davies-Bouldin para validación rigurosa de clusters.',
        },
        technologies: ['Python', 'scikit-learn', 'K-Means', 'DBSCAN', 'Pandas', 'Seaborn'],
        type: 'anomaly-detection',
    },
    {
        title: {
            en: 'Supervised Binary Classification (~80k samples)',
            es: 'Clasificación Binaria Supervisada (~80k muestras)',
        },
        problem: {
            en: 'Build a robust binary classifier on an 80k-row industrial dataset, comparing multiple gradient-boosting and AutoML approaches.',
            es: 'Construir un clasificador binario robusto sobre un dataset industrial de 80k filas, comparando múltiples enfoques de gradient-boosting y AutoML.',
        },
        approach: {
            en: 'Benchmarked CatBoost, LightGBM and H2O AutoML with Optuna hyperparameter tuning. Full experiment tracking and model registry via MLflow.',
            es: 'Comparativa de CatBoost, LightGBM y H2O AutoML con ajuste de hiperparámetros con Optuna. Seguimiento completo de experimentos y registro de modelos con MLflow.',
        },
        technologies: ['Python', 'CatBoost', 'LightGBM', 'H2O AutoML', 'Optuna', 'MLflow'],
        type: 'classification',
    },
    {
        title: {
            en: 'ETL → Training → Prediction Orchestration API',
            es: 'API de Orquestación ETL → Entrenamiento → Predicción',
        },
        problem: {
            en: 'Automate the full ML lifecycle — from raw data ingestion to model training and serving — through a single REST API.',
            es: 'Automatizar el ciclo de vida completo del ML — desde la ingesta de datos brutos hasta el entrenamiento y servicio de modelos — a través de una única API REST.',
        },
        approach: {
            en: 'FastAPI-based orchestration service with automated ETL, sklearn pipeline training, versioned model storage, and real-time prediction endpoints.',
            es: 'Servicio de orquestación basado en FastAPI con ETL automatizado, entrenamiento de pipelines sklearn, almacenamiento versionado de modelos y endpoints de predicción en tiempo real.',
        },
        technologies: ['Python', 'FastAPI', 'scikit-learn', 'MLflow', 'REST API'],
        type: 'mlops-api',
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
};

const labels = {
    en: {
        sectionTitle: 'Projects',
        problem: 'Business problem',
        approach: 'Approach',
        confidential: 'Confidential project',
    },
    es: {
        sectionTitle: 'Proyectos',
        problem: 'Problema de negocio',
        approach: 'Enfoque',
        confidential: 'Proyecto confidencial',
    },
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

    return (
        <section id="projects" className="py-24 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={revealRef} className="reveal">
                    <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-12">
                        {l.sectionTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project, index) => {
                            const cfg = typeConfig[project.type];
                            return (
                                <div
                                    key={index}
                                    className={`group bg-zinc-900/50 border border-zinc-800 border-l-4 ${cfg.accent} rounded-lg p-6 flex flex-col hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-950/50 transition-all duration-300 cursor-default`}
                                >
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border ${cfg.badge}`}>
                                            {cfg.label[language]}
                                        </span>
                                        <span className="text-xs font-mono text-zinc-600 border border-zinc-800 rounded px-2 py-0.5">
                                            {l.confidential}
                                        </span>
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
                                    </div>
                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tag">
                                                {tech}
                                            </span>
                                        ))}
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

export default Projects;

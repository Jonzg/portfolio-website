import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Project {
    title: { en: string; es: string };
    description: { en: string; es: string };
    technologies: string[];
    githubLink: string;
    type: 'machine-learning' | 'data-analysis' | 'visualization' | 'web-development';
    imageUrl?: string;
}

const projects: Project[] = [
    {
        title: {
            en: 'Portfolio Website (in progress)',
            es: 'Sitio Web de Portafolio (en proceso)'
        },
        description: {
            en: 'A personal portfolio website to showcase projects, skills, and experience online. Built for a clean, responsive, and interactive user experience.',
            es: 'Un sitio web personal para mostrar proyectos, habilidades y experiencia profesional en línea. Construido para una experiencia limpia, responsiva e interactiva.'
        },
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
        type: 'web-development',
        githubLink: 'https://github.com/Jonzg/portfolio-website'
    },
    {
        title: {
            en: 'Data Visualization Dashboard',
            es: 'Panel de Visualización de Datos'
        },
        description: {
            en: 'Interactive dashboard for visualizing complex datasets, featuring real-time updates and customizable charts.',
            es: 'Panel interactivo para visualizar conjuntos de datos complejos, con actualizaciones en tiempo real y gráficos personalizables.'
        },
        technologies: ['Python', 'Plotly', 'Dash', 'PostgreSQL'],
        type: 'visualization',
        githubLink: 'https://github.com/yourusername/data-viz-dashboard'
    },
    {
        title: {
            en: 'Predictive Analytics Pipeline',
            es: 'Pipeline de Analítica Predictiva'
        },
        description: {
            en: 'End-to-end ML pipeline for predictive analytics, including data preprocessing, model training, and API deployment.',
            es: 'Pipeline completo de ML para analítica predictiva, incluyendo preprocesamiento de datos, entrenamiento de modelos y despliegue de API.'
        },
        technologies: ['Python', 'Scikit-learn', 'Docker', 'FastAPI'],
        type: 'machine-learning',
        githubLink: 'https://github.com/yourusername/predictive-analytics'
    }
];

const sectionTitles = {
    en: 'Featured Projects',
    es: 'Proyectos Destacados'
};

const typeLabels: Record<string, { en: string; es: string }> = {
    'machine-learning': { en: 'Machine Learning', es: 'Aprendizaje Automático' },
    'visualization': { en: 'Visualization', es: 'Visualización' },
    'data-analysis': { en: 'Data Analysis', es: 'Análisis de Datos' },
    'web-development': { en: 'Web Development', es: 'Desarrollo Web' }
};

const Projects: React.FC = () => {
    const { language } = useLanguage();
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{sectionTitles[language]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${project.type === 'machine-learning'
                                        ? 'bg-blue-100 text-blue-800'
                                        : project.type === 'visualization'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-purple-100 text-purple-800'
                                        }`}>
                                        {typeLabels[project.type][language]}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title[language]}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {project.description[language]}
                                </p>
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium transition-colors duration-300 hover:bg-gray-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    {language === 'en' ? 'View on GitHub' : 'Ver en GitHub'}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const aboutTexts = {
    en: {
        sectionTitle: 'About Me',
        intro: 'With a foundation in Physics and a Master\'s in Data Science, I bridge the gap between analytical thinking and practical problem-solving. My background provides me with a unique perspective on data analysis and machine learning applications.',
        expertise: 'Core Expertise',
        skills: [
            'Machine Learning & Deep Learning',
            'Statistical Analysis',
            'Data Visualization',
            'Scientific Computing',
        ],
        outro: 'I am passionate about leveraging data to drive decision-making and create impactful solutions. My approach combines rigorous scientific methodology with practical business applications.'
    },
    es: {
        sectionTitle: 'Sobre mí',
        intro: 'Con formación en Física y un Máster en Ciencia de Datos, combino el pensamiento analítico con la resolución práctica de problemas. Mi experiencia me aporta una perspectiva única en el análisis de datos y aplicaciones de machine learning.',
        expertise: 'Áreas de especialización',
        skills: [
            'Machine Learning y Deep Learning',
            'Análisis Estadístico',
            'Visualización de Datos',
            'Computación Científica',
        ],
        outro: 'Me apasiona aprovechar los datos para impulsar la toma de decisiones y crear soluciones de impacto. Mi enfoque combina metodología científica rigurosa con aplicaciones prácticas para empresas.'
    }
};

const About: React.FC = () => {
    const { language } = useLanguage();
    const t = aboutTexts[language];
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{t.sectionTitle}</h2>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                        <div className="space-y-8">
                            <div className="prose prose-lg text-gray-600">
                                <p className="leading-relaxed">{t.intro}</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">{t.expertise}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {t.skills.map((skill, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center space-x-3">
                                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <h4 className="font-semibold text-gray-900">{skill}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="prose prose-lg text-gray-600">
                                <p className="leading-relaxed">{t.outro}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
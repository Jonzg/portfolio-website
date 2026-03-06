// src/components/Experience.tsx

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const tasksAyesa = {
  en: [
    'Development of machine learning models to predict nickel concentration in industrial electroplating processes. Application of explainable AI (XAI) techniques to interpret the results and facilitate decision making. Communication of findings to technical and non-technical profiles in the industrial sector.',
    'Development of a Machine Learning based framework for early detection of deviations, delays and bottlenecks in construction projects. Application of clustering, variable selection, anomaly detection and XAI techniques to optimize decision making in the AEC industry.',
    'Predictive modeling and process mining applied to steel production: binary classification, variable analysis, conformance metrics (fitness, precision) and flow visualization with PM4Py. Implementation of MLOps pipelines with MLflow for experiment tracking and model fine-tuning. Synthetic data generation with VAEs and GANs.',
    'Time series forecasting of energy consumption, including data cleaning and analysis, outlier detection, modelling with classical and ML techniques (ARIMA, Prophet, LSTM), and comparative evaluation of models for short- and medium-term forecasting.'
  ],
  es: [
    'Desarrollo de modelos de machine learning para predecir la concentración de níquel en procesos industriales de galvanizado. Aplicación de técnicas de IA explicable (XAI) para interpretar los resultados y facilitar la toma de decisiones. Comunicación de hallazgos a perfiles técnicos y no técnicos del sector industrial.',
    'Desarrollo de un marco basado en Machine Learning para la detección temprana de desviaciones, retrasos y cuellos de botella en proyectos de construcción. Aplicación de técnicas de clustering, selección de variables, detección de anomalías y XAI para optimizar la toma de decisiones en la industria AEC (Arquitectura, Ingeniería y Construcción).',
    'Modelado predictivo y process mining aplicado a producción de acero: clasificación binaria, análisis de variables, métricas de conformidad (fitness, precision) y visualización de flujos con PM4Py. Implementación de pipelines MLOps con MLflow para seguimiento de experimentos y fine-tuning de modelos. Generación de datos sintéticos con VAEs y GANs.',
    'Predicción de series temporales de consumo energético, incluyendo análisis y limpieza de datos, detección de outliers, modelado con técnicas clásicas de ML (ARIMA, Prophet, LSTM) y evaluación comparativa de modelos de predicción a corto y medio plazo.'
  ]
};

const experienceData = {
  en: [
    {
      company: 'Ayesa',
      linkedin: 'https://www.linkedin.com/company/ayesa/',
      position: 'Data Scientist at the Ibermática Innovation Institute (i3B)',
      location: 'Greater Bilbao metropolitan area',
      years: 'Feb 2024 – Present',
      description: 'Participation in R&D projects in applied Artificial Intelligence at national and European level. Research tasks in new algorithms and innovative proposals, data analysis and processing, experimentation and creation of predictive models and visualisation and communication of results.',
      tasks: tasksAyesa.en.map(description => ({ description })),
    },
    {
      company: 'Hubbell',
      linkedin: 'https://www.linkedin.com/company/hubbellincorporated/',
      position: 'Research Data Scientist',
      location: 'Bilbao',
      years: 'Oct 2023 – Feb 2024',
      description: 'Development of my Master\'s Thesis in Data Science: "Advanced Metering Infrastructure-oriented data imputation through machine learning techniques", with the objective of studying and imputing missing values in smart meter time series using ML models applied to real data from the electricity sector.',
      tasks: [],
    },
    {
      company: 'EDP Energy',
      linkedin: 'https://www.linkedin.com/company/edp/',
      position: 'Data Scientist',
      location: 'Bilbao',
      years: 'Apr 2022 – Jul 2022',
      description: 'Extracurricular internship in the Business Intelligence and Big Data department of EDP Energy. Creation and optimisation of ML models applied to commercial energy businesses and research into new Open Data systems.',
      tasks: [],
    },
  ],
  es: [
    {
      company: 'Ayesa',
      linkedin: 'https://www.linkedin.com/company/ayesa/',
      position: 'Científico de datos en el Instituto de Ibermática de Innovación (i3B)',
      location: 'Bilbao',
      years: 'Feb 2024 – Actualidad',
      description: 'Participación en proyectos de I+D de inteligencia artificial aplicada de escala nacional y europea. Tareas de investigación en nuevos algoritmos y propuestas innovativas, análisis y procesamiento de datos, experimentación y creación de modelos de predicción y visualización y comunicación de resultados.',
      tasks: tasksAyesa.es.map(description => ({ description })),
    },
    {
      company: 'Hubbell',
      linkedin: 'https://www.linkedin.com/company/hubbellincorporated/',
      position: 'Científico de datos',
      location: 'Bilbao',
      years: 'Oct 2023 – Feb 2024',
      description: 'Desarrollo de mi Trabajo de Fin de Máster en Ciencia de Datos: "Advanced Metering Infrastructure-oriented data imputation through machine learning techniques", con el objetivo de estudiar e imputar valores faltantes en series temporales de smart meters mediante modelos de ML aplicados a datos reales del sector eléctrico.',
      tasks: [],
    },
    {
      company: 'EDP Energy',
      linkedin: 'https://www.linkedin.com/company/edp/',
      position: 'Científico de datos',
      location: 'Bilbao',
      years: 'Abr 2022 – Jul 2022',
      description: 'Prácticas extracurriculares en el departamento de Inteligencia de negocio y Big Data de EDP Energía. Creación y optimización de modelos de ML aplicado a negocios comerciales de energía e investigación de nuevos sistemas Open Data.',
      tasks: [],
    },
  ],
};

const sectionTitles = {
  en: 'Experience',
  es: 'Experiencia',
};

const AccordionTasks: React.FC<{ tasks: { description: string }[] }> = ({ tasks }) => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  return (
    <div className="mt-4">
      <button
        className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-2 mb-3 focus:outline-none transition-colors duration-200"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {open ? (language === 'en' ? 'Hide details' : 'Ocultar detalles') : (language === 'en' ? 'Show details' : 'Ver detalles')}
        <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="space-y-3 border-l border-zinc-300 dark:border-zinc-700 pl-4">
          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">
            {language === 'en' ? 'Projects' : 'Proyectos'}
          </p>
          <ul className="space-y-3">
            {tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {task.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
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
    <section id="experience" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="reveal">
          <h2 className="text-3xl font-mono font-bold text-zinc-900 dark:text-zinc-50 mb-12">
            {sectionTitles[language]}
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <h3 className="text-zinc-900 dark:text-zinc-50 font-semibold leading-snug">{exp.position}</h3>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 whitespace-nowrap">{exp.years}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <a
                    href={exp.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    {exp.company}
                  </a>
                  {exp.location && (
                    <>
                      <span className="text-zinc-400 dark:text-zinc-700">·</span>
                      <span className="text-zinc-500 text-sm">{exp.location}</span>
                    </>
                  )}
                </div>
                {exp.description && (
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
                {exp.company === 'Ayesa' && exp.tasks && exp.tasks.length > 0 && (
                  <AccordionTasks tasks={exp.tasks} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

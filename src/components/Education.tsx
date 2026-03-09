import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const educationData = {
  en: [
    {
      university: 'Universidad Autónoma de Madrid',
      location: 'Madrid',
      degree: 'M.S. in Data Science',
      years: '2022 – 2024',
      details: [
        'Machine learning, deep learning, reinforcement learning',
        'Time series analysis, NLP, advanced statistics',
        'Computer vision, advanced programming',
      ],
    },
    {
      university: 'Universidad del País Vasco',
      location: 'Bilbao',
      degree: 'B.S. in Physics',
      years: '2018 – 2022',
      details: [
        'Linear algebra, calculus, statistics, probability',
        'Differential equations, numerical computation',
      ],
    },
  ],
  es: [
    {
      university: 'Universidad Autónoma de Madrid',
      location: 'Madrid',
      degree: 'Máster en Ciencia de Datos',
      years: '2022 – 2024',
      details: [
        'Machine learning, deep learning, aprendizaje por refuerzo',
        'Análisis de series temporales, NLP, análisis estadístico avanzado',
        'Visión por ordenador y programación avanzada',
      ],
    },
    {
      university: 'Universidad del País Vasco',
      location: 'Bilbao',
      degree: 'Grado en Física',
      years: '2018 – 2022',
      details: [
        'Álgebra lineal, cálculo, estadística, probabilidad',
        'Ecuaciones diferenciales y computación numérica',
      ],
    },
  ],
};

const coursesCerts = {
  en: [
    {
      name: 'Generative AI with Large Language Models',
      org: 'Coursera – AWS & DeepLearning.AI',
      year: '2025',
      link: 'https://www.coursera.org/learn/generative-ai-with-llms/',
    },
    {
      name: 'Machine Learning in Production',
      org: 'Coursera – DeepLearning.AI',
      year: '2025',
      link: 'https://www.coursera.org/learn/introduction-to-machine-learning-in-production/',
    },
  ],
  es: [
    {
      name: 'IA Generativa con Modelos Grandes de Lenguaje (LLMs)',
      org: 'Coursera – AWS & DeepLearning.AI',
      year: '2025',
      link: 'https://www.coursera.org/learn/generative-ai-with-llms/',
    },
    {
      name: 'Machine Learning en Producción',
      org: 'Coursera – DeepLearning.AI',
      year: '2025',
      link: 'https://www.coursera.org/learn/introduction-to-machine-learning-in-production/',
    },
  ],
};

const languages = {
  en: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Cambridge Advanced (C1)' },
    { name: 'Basque', level: 'Advanced (B2)' },
  ],
  es: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Cambridge Advanced (C1)' },
    { name: 'Euskera', level: 'Avanzado (B2)' },
  ],
};

const labels = {
  en: {
    sectionTitle: 'Education',
    certs: 'Courses & Certifications',
    langs: 'Languages',
  },
  es: {
    sectionTitle: 'Formación',
    certs: 'Cursos y Certificaciones',
    langs: 'Idiomas',
  },
};

const Education: React.FC = () => {
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
    <section id="education" className="py-24 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="reveal">
          <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-12">
            {l.sectionTitle}
          </h2>

          {/* Degrees */}
          <div className="space-y-4 mb-4">
            {educationData[language].map((edu, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-zinc-50 font-semibold">{edu.degree}</h3>
                    <p className="text-blue-400 text-sm mt-0.5">{edu.university} · {edu.location}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">{edu.years}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {edu.details.map((d, i) => (
                    <li key={i} className="text-zinc-400 text-sm leading-relaxed before:content-['—'] before:mr-2 before:text-zinc-700">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
            <h3 className="text-zinc-50 font-semibold mb-4">{l.certs}</h3>
            <ul className="space-y-3">
              {coursesCerts[language].map((course, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="text-zinc-300 text-sm">{course.name}</span>
                  <span className="text-zinc-700 hidden sm:inline">·</span>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {course.org}
                  </a>
                  <span className="text-zinc-600 text-xs font-mono">{course.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
            <h3 className="text-zinc-50 font-semibold mb-4">{l.langs}</h3>
            <ul className="space-y-2">
              {languages[language].map((lang, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <span className="text-zinc-300 font-medium w-20">{lang.name}</span>
                  <span className="text-zinc-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

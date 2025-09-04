import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const educationData = {
  en: [
    {
      university: 'Universidad Autónoma de Madrid, Madrid',
      degree: 'M.S. in Data Science',
      years: '2022 - 2024',
      details: [
        'Machine learning, deep learning, reinforcement learning',
        'Time series analysis, NLP, advanced statistics',
        'Computer vision, advanced programming',
      ],
    },
    {
      university: 'Universidad del País Vasco, Bilbao',
      degree: 'B.S. in Physics',
      years: '2018 - 2022',
      details: [
        'Linear algebra, calculus, statistics, probability',
        'Differential equations, numerical computation',
      ],
    },
  ],
  es: [
    {
      university: 'Universidad Autónoma de Madrid, Madrid',
      degree: 'Máster en Ciencia de Datos',
      years: '2022 - 2024',
      details: [
        'Machine learning, deep learning, aprendizaje por refuerzo',
        'Análisis de series temporales, Procesamiento de Lenguaje Natural, análisis estadístico avanzado',
        'Visión por ordenador y programación avanzada',
      ],
    },
    {
      university: 'Universidad del País Vasco, Bilbao',
      degree: 'Grado en física',
      years: '2018 - 2022',
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
      org: 'Coursera (AWS & DeepLearning.AI)',
      year: '2025',
      link: 'https://www.coursera.org/learn/generative-ai-with-llms/',
    },
    {
      name: 'Machine Learning in Production',
      org: 'Coursera (DeepLearning.AI)',
      year: '2025',
      link: 'https://www.coursera.org/learn/introduction-to-machine-learning-in-production/',
    },
  ],
  es: [
    {
      name: 'IA Generativa con Modelos Grandes de Lenguaje (LLMs)',
      org: 'Coursera (AWS & DeepLearning.AI)',
      year: '2025',
      link: 'https://www.coursera.org/learn/generative-ai-with-llms/',
    },
    {
      name: 'Machine Learning en Producción',
      org: 'Coursera (DeepLearning.AI)',
      year: '2025',
      link: 'https://www.coursera.org/learn/introduction-to-machine-learning-in-production/',
    },
  ],
};

const languages = {
  en: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Cambridge Advanced Exam (C1)' },
    { name: 'Basque', level: 'Advanced (B2)' },
  ],
  es: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Cambridge Advanced Exam (C1)' },
    { name: 'Euskera', level: 'Avanzado (B2)' },
  ],
};

const skills = {
  en: [
    '🐍 Python, 📊 R, 🗄️ SQL, 🧮 Fortran',
    '🤖 ML & DL: Numpy, Pandas, SKLearn, Boosting, PyTorch, TensorFlow, PySpark, Matplotlib, Seaborn',
    '☁️ Cloud: Azure',
    '🚀 Deployment: Git, MLFlow, FastAPI',
    '🛠️ Other: LaTeX, OpenCV, Matlab, SAS, PowerBI, Microsoft Office',
  ],
  es: [
    '🐍 Python, 📊 R, 🗄️ SQL, 🧮 Fortran',
    '🤖 ML y DL: Numpy, Pandas, SKLearn, Boosting, PyTorch, TensorFlow, PySpark, Matplotlib, Seaborn',
    '☁️ Cloud: Azure',
    '🚀 Despliegue: Git, MLFlow, FastAPI',
    '🛠️ Otros: LaTeX, OpenCV, Matlab, SAS, PowerBI, Microsoft Office',
  ],
};

const sectionTitles = {
  en: 'Education & Certifications',
  es: 'Formación y Certificaciones',
};

const coursesTitle = {
  en: 'Courses & Certifications',
  es: 'Cursos y Certificaciones',
};

const languagesTitle = {
  en: 'Languages',
  es: 'Idiomas',
};

const skillsTitle = {
  en: 'Skills',
  es: 'Competencias',
};

const Education: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          {sectionTitles[language]}
        </h2>
        <div className="space-y-8">
          {educationData[language].map((edu, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {edu.university}
              </h3>
              <p className="text-gray-700 font-medium mb-1">
                {edu.degree}{' '}
                <span className="text-gray-500">({edu.years})</span>
              </p>
              <ul className="list-disc list-inside text-gray-600 text-base ml-4">
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {coursesTitle[language]}
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-base ml-4">
              {coursesCerts[language].map((course, idx) => (
                <li key={idx}>
                  {course.name} –{' '}
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {course.org}
                  </a>{' '}
                  <span className="text-gray-500">{course.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              {languagesTitle[language]}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {languages[language].map((lang, idx) => (
                <li key={idx}>
                  {' '}
                  <span className="font-medium">{lang.name}:</span> {lang.level}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              {skillsTitle[language]}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {skills[language].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

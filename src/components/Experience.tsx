// src/components/Experience.tsx
import React from 'react';

interface Task {
  description: string;
}

interface ExperienceItem {
  company: string;
  linkedin?: string;
  position: string;
  location?: string;
  years: string;
  description?: string;
  tasks?: Task[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Ayesa',
      linkedin: 'https://www.linkedin.com/company/ayesa/',
      position: 'Data Scientist at the Ibermática Innovation Institute (i3B)',
      location: 'Greater Bilbao metropolitan area',
      years: 'Feb 2024 - Present',
      description: 'Participation in R&D projects in applied Artificial Intelligence at national and European level. Research tasks in new algorithms and innovative proposals, data analysis and processing, experimentation and creation of predictive models and visualisation and communication of results.',
      tasks: [
        { description: 'Development of machine learning models to predict nickel concentration in industrial electroplating processes. Application of explainable AI (XAI) techniques to interpret the results and facilitate decision making. Communication of findings to technical and non-technical profiles in the industrial sector.' },
        { description: 'Development of a Machine Learning based framework for early detection of deviations, delays and bottlenecks in construction projects. Application of clustering, variable selection, anomaly detection and XAI techniques to optimize decision making in the AEC industry.' },
        { description: 'Predictive modeling and process mining applied to steel production: binary classification, variable analysis, conformance metrics (fitness, precision) and flow visualization with PM4Py. Implementation of MLOps pipelines with MLflow for experiment tracking and model fine-tuning. Synthetic data generation with VAEs and GANs.' },
        { description: 'Time series forecasting of energy consumption, including data cleaning and analysis, outlier detection, modelling with classical and ML techniques (ARIMA, Prophet, LSTM), and comparative evaluation of models for short- and medium-term forecasting.' },
      ],
    },
    {
      company: 'Hubbell',
      linkedin: 'https://www.linkedin.com/company/hubbellincorporated/',
      position: 'Research Data Scientist',
      location: 'Bilbao',
      years: 'Oct 2023 - Feb 2024',
      description: 'Development of my Master\'s Thesis in Data Science: "Advanced Metering Infrastructure-oriented data imputation through machine learning techniques", with the objective of studying and imputing missing values in smart meter time series using ML models applied to real data from the electricity sector.',
      tasks: [],
    },
    {
      company: 'EDP Energy',
      linkedin: 'https://www.linkedin.com/company/edp/',
      position: 'Data Scientist',
      location: 'Bilbao',
      years: 'Apr 2022 - Jul 2022',
      description: 'Extracurricular internship in the Business Intelligence and Big Data department of EDP Energy. Creation and optimisation of ML models applied to commercial energy businesses and research into new Open Data systems.',
      tasks: [],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-8 md:pl-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
              )}
              
              <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 mt-1.5"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <span className="text-sm font-medium text-gray-500">{exp.years}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <a
                        href={exp.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {exp.company}
                      </a>
                      {exp.location && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{exp.location}</span>
                        </>
                      )}
                    </div>

                    {exp.description && (
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {exp.tasks && exp.tasks.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              <span className="text-gray-600 leading-relaxed">
                                {task.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

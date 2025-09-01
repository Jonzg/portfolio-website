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
    <section id="experience" className="py-10 px-5 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold">
              {exp.linkedin ? (
                <a 
                  href={exp.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h3>
            <p className="italic">{exp.location}</p>
            <p className="text-gray-700">{exp.position}</p>
            <p className="text-gray-500 mb-4">{exp.years}</p>
            {exp.description && <p className="mb-3">{exp.description}</p>}
            {exp.tasks && exp.tasks.length > 0 && (
              <ul className="list-disc list-inside space-y-2">
                {exp.tasks.map((task, tid) => (
                  <li key={tid}>{task.description}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

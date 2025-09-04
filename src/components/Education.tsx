import React from 'react';

const Education: React.FC = () => (
  <section id="education" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Education & Certifications</h2>
      <div className="space-y-8">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Universidad Autónoma de Madrid, Madrid</h3>
          <p className="text-gray-700 font-medium mb-1">M.S. in Data Science <span className="text-gray-500">(2022 - 2024)</span></p>
          <ul className="list-disc list-inside text-gray-600 text-base ml-4">
            <li>Machine learning, deep learning, reinforcement learning</li>
            <li>Time series analysis, NLP, advanced statistics</li>
            <li>Computer vision, advanced programming</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Universidad del País Vasco, Bilbao</h3>
          <p className="text-gray-700 font-medium mb-1">B.S. in Physics <span className="text-gray-500">(2018 - 2022)</span></p>
          <ul className="list-disc list-inside text-gray-600 text-base ml-4">
            <li>Linear algebra, calculus, statistics, probability</li>
            <li>Differential equations, numerical computation</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Courses & Certifications</h3>
          <ul className="list-disc list-inside text-gray-600 text-base ml-4">
            <li>
              Generative AI with Large Language Models – <a href="https://www.coursera.org/learn/generative-ai-with-llms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Coursera (AWS & DeepLearning.AI)</a> <span className="text-gray-500">2025</span>
            </li>
            <li>
              Machine Learning in Production – <a href="https://www.coursera.org/learn/introduction-to-machine-learning-in-production/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Coursera (DeepLearning.AI)</a> <span className="text-gray-500">2025</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Languages</h3>
          <ul className="space-y-2 text-gray-700">
            <li> <span className="font-medium">Spanish:</span> Native</li>
            <li> <span className="font-medium">English:</span> Cambridge Advanced Exam (C1)</li>
            <li> <span className="font-medium">Basque:</span> Advanced (B2)</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Skills</h3>
          <ul className="space-y-2 text-gray-700">
            <li>🐍 <span className="font-medium">Python</span>, 📊 R, 🗄️ SQL, 🧮 Fortran</li>
            <li>🤖 <span className="font-medium">ML & DL:</span> Numpy, Pandas, SKLearn, Boosting, PyTorch, TensorFlow, PySpark, Matplotlib, Seaborn</li>
            <li>☁️ <span className="font-medium">Cloud:</span> Azure</li>
            <li>🚀 <span className="font-medium">Deployment:</span> Git, MLFlow, FastAPI</li>
            <li>🛠️ <span className="font-medium">Other:</span> LaTeX, OpenCV, Matlab, SAS, PowerBI, Microsoft Office</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;

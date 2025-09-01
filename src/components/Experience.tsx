// filepath: portfolio-website/src/components/Experience.tsx

import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        { company: 'Company A', position: 'Data Scientist', years: '2020 - Present' },
        { company: 'Company B', position: 'Machine Learning Engineer', years: '2018 - 2020' },
        { company: 'Company C', position: 'Intern', years: '2017 - 2018' },
    ];

    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <div className="max-w-4xl mx-auto mt-6">
                <ul className="space-y-4">
                    {experiences.map((exp, index) => (
                        <li key={index} className="border-b pb-4">
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <p className="text-gray-600">{exp.company}</p>
                            <p className="text-gray-500">{exp.years}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
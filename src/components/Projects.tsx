import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        githubLink: 'https://github.com/yourusername/project-one'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        githubLink: 'https://github.com/yourusername/project-two'
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        githubLink: 'https://github.com/yourusername/project-three'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                        <a href={project.githubLink} className="text-blue-500 hover:underline mt-2 block">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
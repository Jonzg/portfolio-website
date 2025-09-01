import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
            <div className="flex flex-col items-center">
                <p className="mb-4">Feel free to reach out through any of the platforms below:</p>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/jonzg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                    <a href="https://github.com/Jonzg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                    <a href="mailto:jon.zorrilla03@gmail.com" className="text-blue-500 hover:underline">Email</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
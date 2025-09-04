import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white text-center p-6">
            <div className="space-y-6">
                <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">Jon Zorrilla</h1>
                <p className="text-xl text-gray-600 font-light tracking-wide">Data Scientist | Machine Learning Engineer</p>
                <div className="flex gap-4 mt-8">
                    <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl">View Projects</a>
                    <a href="#contact" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition duration-300">Contact Me</a>
                </div>
                <div className="mt-12 animate-bounce">
                    <button
                        aria-label="Scroll to About"
                        onClick={() => {
                            const aboutSection = document.getElementById('about');
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="focus:outline-none"
                    >
                        <svg className="w-8 h-8 text-blue-500 hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
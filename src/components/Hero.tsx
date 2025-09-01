import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-white text-center">
            <h1 className="text-5xl font-bold text-gray-800">Jon Zorrilla</h1>
            <p className="mt-4 text-lg text-gray-600">Data Scientist | Machine Learning | AI</p>
        </section>
    );
};

export default Hero;
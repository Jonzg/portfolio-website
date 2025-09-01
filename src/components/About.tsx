import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-10 px-5">
            <h2 className="text-3xl font-bold mb-5">About Me</h2>
            <p className="mb-4">
                During my studies in Physics, I acquired a solid analytical, mathematical and technological foundation 
                that sparked my interest in solving complex problems. This led me to take a master's degree in Data Science 
                to broaden my knowledge and apply my skills to real solutions.

                My main interests are focused on the study and application of machine learning and deep learning techniques, 
                as well as their integration and deployment in different scientific and industrial fields.

                I consider myself a resilient, disciplined person with a constant and humble learning attitude.
            </p>
            <p>
                I enjoy solving challenging problems and continuously learning new technologies to enhance my skill set. 
                My goal is to leverage data to drive decision-making and create impactful solutions.
            </p>
        </section>
    );
};

export default About;
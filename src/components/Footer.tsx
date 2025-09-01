// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-gray-700 py-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="mt-2">
                <a href="https://github.com/Jonzg" className="text-blue-500 hover:underline">GitHub</a> | 
                <a href="https://www.linkedin.com/in/Jonzg" className="text-blue-500 hover:underline"> LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
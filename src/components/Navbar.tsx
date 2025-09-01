import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold">Your Name</h1>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#about" className="text-gray-900 hover:text-blue-500">About</a>
                                <a href="#experience" className="text-gray-900 hover:text-blue-500">Experience</a>
                                <a href="#projects" className="text-gray-900 hover:text-blue-500">Projects</a>
                                <a href="#contact" className="text-gray-900 hover:text-blue-500">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
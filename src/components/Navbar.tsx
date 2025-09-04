import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact', isButton: true }
    ];

    // Barra de progreso scroll
    const [scrollProgress, setScrollProgress] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a 
                            href="#" 
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
                        >
                            JZ
                        </a>
                    </div>
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    item.isButton
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg ml-2'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Barra de progreso scroll justo debajo de la navbar */}
            <div className="w-full h-1 bg-transparent">
                <div
                    ref={progressRef}
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-200"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
            {/* Mobile menu */}
            <div 
                className={`md:hidden transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
            >
                <div className="px-4 py-3 space-y-1 bg-white shadow-lg rounded-b-2xl">
                    {menuItems.map((item) => (
                        <a 
                            key={item.label}
                            href={item.href}
                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                item.isButton
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg mt-4'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                            onClick={toggleMenu}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
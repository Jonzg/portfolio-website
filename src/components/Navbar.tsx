import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const menuLabels = {
    en: {
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact',
    },
    es: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        education: 'Formación',
        projects: 'Proyectos',
        contact: 'Contacto',
    }
};

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const menuItems = [
        { label: menuLabels[language].about, href: '#about' },
        { label: menuLabels[language].experience, href: '#experience' },
        { label: menuLabels[language].education, href: '#education' },
        { label: menuLabels[language].projects, href: '#projects' },
        { label: menuLabels[language].contact, href: '#contact', isButton: true }
    ];

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
        <nav className="fixed w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a
                            href="#"
                            className="text-xl font-mono font-bold text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
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
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${item.isButton
                                    ? 'bg-blue-600 text-white hover:bg-blue-500 ml-2'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Language Switcher */}
                        <button
                            className="ml-1 px-3 py-1 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-300 text-xs font-mono hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                            aria-label="Cambiar idioma"
                        >
                            {language === 'en' ? 'ES' : 'EN'}
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            className="px-3 py-1 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-300 text-xs font-mono transition-colors duration-300"
                            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                            aria-label="Cambiar idioma"
                        >
                            {language === 'en' ? 'ES' : 'EN'}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {!isOpen ? (
                                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll progress bar */}
            <div className="w-full h-px bg-transparent">
                <div
                    ref={progressRef}
                    className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-200"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full z-40 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ maxHeight: isOpen ? '60vh' : '0', overflowY: 'auto' }}
            >
                <div className="px-4 py-3 space-y-1 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`block px-4 py-3 rounded text-sm font-medium transition-all duration-300 ${item.isButton
                                ? 'bg-blue-600 text-white hover:bg-blue-500 mt-2'
                                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                }`}
                            onClick={() => setIsOpen(false)}
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

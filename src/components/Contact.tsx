import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const contactTexts = {
    en: {
        sectionTitle: 'Contact',
        description: "Interested in collaboration or have a project in mind? Let's talk.",
        emailCta: 'Send an email',
        location: 'Bilbao, Basque Country · Open to remote',
    },
    es: {
        sectionTitle: 'Contacto',
        description: '¿Tienes un proyecto en mente o te interesa colaborar? Hablemos.',
        emailCta: 'Enviar un correo',
        location: 'Bilbao, País Vasco · Abierto a trabajo remoto',
    }
};

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const t = contactTexts[language];
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = revealRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="py-16 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={revealRef} className="reveal">
                    <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-4">
                        {t.sectionTitle}
                    </h2>
                    <p className="text-zinc-400 text-base mb-6 max-w-xl">{t.description}</p>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <a
                            href="mailto:jon.zorrilla03@gmail.com"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-500 transition-colors duration-200"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {t.emailCta}
                        </a>
                        <span className="text-zinc-600 text-xs font-mono">jon.zorrilla03@gmail.com</span>
                    </div>

                    <div className="inline-flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-sm">
                        <svg className="w-4 h-4 text-zinc-400 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{t.location}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

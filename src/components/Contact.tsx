import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const contactTexts = {
    en: {
        sectionTitle: 'Contact',
        description: "Interested in collaboration or have a project in mind? Let's talk.",
        emailCta: 'Send an email',
        linkedinCta: 'LinkedIn',
        location: 'Bilbao, Basque Country · Open to remote',
    },
    es: {
        sectionTitle: 'Contacto',
        description: '¿Tienes un proyecto en mente o te interesa colaborar? Hablemos.',
        emailCta: 'Enviar un correo',
        linkedinCta: 'LinkedIn',
        location: 'Bilbao, País Vasco · Abierto a trabajo remoto',
    }
};

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const t = contactTexts[language];

    return (
        <section id="contact" className="py-16 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-4">
                        {t.sectionTitle}
                    </h2>
                    <p className="text-zinc-400 text-base mb-6 max-w-xl">{t.description}</p>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <a
                            href="mailto:jon.zorrilla03@gmail.com"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {t.emailCta}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jonzg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-zinc-700 text-zinc-300 text-xs font-medium rounded-md hover:border-zinc-500 hover:text-zinc-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            {t.linkedinCta}
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
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

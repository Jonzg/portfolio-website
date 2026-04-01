import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const publications = [
  {
    title: 'AI-Driven Decision Support System for Proactive Risk Management in Construction Projects',
    authors: 'Zorrilla, J.; Seijo, S.; Arenal, U.; Mena, J.R.',
    journal: 'Intelligent Infrastructure and Construction',
    citation: 'Intell. Infrastruct. Constr. 2026, 2, 4.',
    doi: 'https://doi.org/10.3390/iic2020004',
    url: 'https://www.mdpi.com/3042-4720/2/2/4',
    year: '2026',
  },
];

const labels = {
  en: {
    sectionTitle: 'Publications',
    viewArticle: 'View article',
  },
  es: {
    sectionTitle: 'Publicaciones',
    viewArticle: 'Ver artículo',
  },
};

const Publications: React.FC = () => {
  const { language } = useLanguage();
  const l = labels[language];
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="publications" className="py-24 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="reveal">
          <h2 className="text-3xl font-mono font-bold text-zinc-50 mb-12">
            {l.sectionTitle}
          </h2>

          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h3 className="text-zinc-50 font-semibold leading-snug">{pub.title}</h3>
                  <span className="text-xs font-mono text-zinc-500 whitespace-nowrap sm:ml-4">{pub.year}</span>
                </div>

                <p className="text-blue-400 text-sm mt-1">{pub.authors}</p>
                <p className="text-zinc-500 text-sm mt-1 italic">{pub.journal}</p>
                <p className="text-zinc-600 text-xs font-mono mt-1">{pub.citation}</p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                  >
                    {l.viewArticle} →
                  </a>
                  <span className="text-zinc-600 text-xs font-mono self-center">
                    DOI: {pub.doi.replace('https://doi.org/', '')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

# Portfolio — Data Scientist

## Sobre mí
- Perfil: Data Scientist / AI Engineer con experiencia en el ciclo completo de datos
- Ubicación: Bilbao, País Vasco
- Formación: Licenciatura + Máster
- Especialización: ETL, procesamiento de datos, entrenamiento de modelos, despliegue, investigación
- Idiomas: Español, Inglés

## Objetivo del portfolio
Mostrar proyectos y habilidades técnicas de forma clara y profesional para conseguir roles de
Data Science / AI en la región del Bilbao y alrededores.

## Stack técnico principal
- **Lenguajes:** Python (principal), SQL
- **ML/Data:** scikit-learn, CatBoost, LightGBM, H2O AutoML, Optuna, pandas, numpy
- **MLOps:** MLflow, FastAPI, Git
- **Process Mining:** pm4py (DFG, BPMN, árboles de proceso)
- **Visualización:** matplotlib, seaborn, plotly
- **Entorno:** Anaconda, VS Code, Linux/Windows

## Diseño y estilo

### Principios obligatorios
- **Minimalista** — menos es más, sin elementos decorativos innecesarios
- **Mobile-first** — diseño responsivo desde el principio, no como afterthought
- **Rápido** — sin frameworks pesados, sin dependencias innecesarias
- **Legible** — jerarquía tipográfica clara, buen contraste, espaciado generoso
- **Sin JavaScript innecesario** — preferir CSS puro cuando sea posible

### Estética
- Paleta de colores: oscura o neutra fría (no colores llamativos ni gradientes morados)
- Tipografía: serif o monospace para titulares, sans-serif limpia para cuerpo
- Sin animaciones excesivas — si las hay, sutiles y con propósito
- Sin iconos genéricos de stock ni ilustraciones de relleno
- Código con syntax highlighting si se muestra

### Lo que NO hacer
- No usar plantillas genéricas de "developer portfolio"
- No Bootstrap, no Material UI, no frameworks CSS pesados
- No secciones de "mis habilidades en barras de progreso" (son engañosas y poco profesionales)
- No fotos de stock ni ilustraciones de IA genéricas
- No animaciones de partículas ni efectos de fondo llamativos
- No infinite scroll ni efectos parallax agresivos

## Estructura del portfolio

### Secciones principales (en este orden)
1. **Hero** — nombre, título profesional, frase concisa, contacto/CV
2. **Sobre mí** — párrafo breve, enfocado en lo que aporto, no en la autobiografía
3. **Proyectos** — máximo 4-6 proyectos destacados con descripción, stack y enlace
4. **Habilidades** — listado limpio por categorías (no barras de progreso)
5. **Contacto** — email y LinkedIn como mínimo

### Proyectos a incluir (prioridad)
- Pipeline de análisis de rutas de fabricación (process mining, Jaccard similarity, pm4py)
- Clustering y detección de anomalías en producción industrial
- Clasificación binaria supervisada (CatBoost/LightGBM/H2O + Optuna + MLflow)
- API de orquestación de pipeline ETL → training → prediction (FastAPI)

### Descripción de cada proyecto debe incluir
- Problema que resuelve (contexto de negocio)
- Enfoque técnico resumido
- Stack utilizado (como tags/badges simples)
- Enlace a GitHub si aplica

## Tecnologías de implementación

### Stack del portfolio
- **React + TypeScript** (`.tsx`)
- CSS custom properties (variables) obligatorio para el tema
- Sin Bootstrap, sin Material UI, sin frameworks CSS pesados
- Tailwind sólo si ya está configurado en el proyecto

### Arquitectura actual
```
src/
  App.tsx                  ← punto de entrada, orden de secciones
  context/
    LanguageContext.tsx     ← gestión del idioma activo (ES/EN)
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Education.tsx
    Experience.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
```

### Orden de secciones (definido en App.tsx)
1. Navbar
2. Hero
3. About
4. Experience
5. Education
6. Projects
7. Contact
8. Footer

### Internacionalización (i18n)
- El portfolio es **bilingüe: castellano e inglés**
- El idioma se gestiona a través de `LanguageContext`
- **Todo texto visible debe estar en ambos idiomas**
- Al crear o modificar cualquier componente, incluir siempre las dos versiones del texto
- El selector de idioma vive en el `Navbar`
- Castellano como idioma por defecto

### Convención para textos en componentes
```tsx
const { language } = useLanguage(); // hook del LanguageContext

const content = {
  es: { title: 'Título en castellano' },
  en: { title: 'Title in English' },
};

// Uso
<h1>{content[language].title}</h1>
```

## Convenciones de código
- HTML semántico (usar `<section>`, `<article>`, `<nav>`, `<main>`, etc.)
- CSS: BEM o estructura clara por componentes, sin clases utilitarias masivas
- Comentarios en español
- Sin código muerto ni estilos sin usar
- Accesibilidad básica: alt en imágenes, aria-labels donde corresponda, contraste WCAG AA

## Rendimiento
- Imágenes optimizadas (WebP si es posible)
- Sin fuentes de Google Fonts si hay alternativas del sistema adecuadas
- Sin scripts de terceros innecesarios (analytics, chatbots, etc.)
- Lighthouse score objetivo: >90 en Performance, Accessibility y Best Practices

## Contexto adicional para Claude
- El portfolio debe transmitir seriedad técnica, no creatividad artística
- El público objetivo son hiring managers y recruiters técnicos en el País Vasco / España
- Priorizar claridad sobre originalidad cuando entren en conflicto
- Si hay dudas sobre algo, preguntar antes de implementar
- Commits pequeños y descriptivos al modificar ficheros
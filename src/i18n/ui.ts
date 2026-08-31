export type Language = 'en' | 'es';

export const ui = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.tweets': 'Microblog',
    'nav.metrics': 'Benchmarks',
    'nav.about': 'About',
    'nav.downloadCV': 'Download CV',

    // Hero
    'hero.badge': 'Open to Work • Remote / Global (UTC-3)',
    'hero.title': 'Christian Quidel',
    'hero.subtitle': 'Data Scientist Trainee • MLOps • Python & Cloud Architecture',
    'hero.pitch': 'Oracle Next Education (ONE) & Alura Latam graduate with a prior background in high-stakes diagnostic imaging (ICU, Coronary Care, Neonatology). I transform complex data into high-performance, production-ready Machine Learning pipelines, specializing in sub-millisecond ONNX inference, cloud infrastructure (OCI), and antifragile statistical rigor.',
    'hero.btnProjects': 'View Projects',
    'hero.btnFollowX': 'Follow on X (@CDanqui)',
    'hero.btnLinkedIn': 'Connect on LinkedIn',
    'hero.statsTitle': 'Core Stack',
    'hero.statsBadge': 'Production',
    'hero.statsLanguages': 'Languages:',
    'hero.statsML': 'ML / NLP:',
    'hero.statsMLOps': 'MLOps:',
    'hero.statsCloud': 'Cloud & DevOps:',
    'hero.statsRigor': 'Rigor:',
    'hero.statsRigorValue': 'Zero Data Leakage • IQR EDA',
    'hero.statsLocation': 'Base Location:',

    // Projects Section
    'projects.tag': 'Technical Portfolio',
    'projects.title': 'Featured Machine Learning Projects',
    'projects.subtitle': 'End-to-end data science solutions: NLP, inference latency optimization, and containerized cloud deployment.',
    'projects.viewAll': 'View all projects',
    'projects.repoBtn': 'View Repository',
    'projects.demoBtn': 'Live Demo →',
    'projects.techTitle': 'Key Technical Highlights:',

    // Benchmark / Metrics
    'metrics.tag': 'Performance & MLOps Metrics',
    'metrics.title': 'Inference Benchmark & Model Validation',
    'metrics.subtitle': 'Empirical comparison of inference latency between pure Python microservices and native ONNX serialization in Java 17 (Spring Boot).',
    'metrics.chartTitle': 'Inference Latency per Request (ms)',
    'metrics.chartReduction': '↓ 98.2% Reduction',
    'metrics.cardResults': 'Production Results',
    'metrics.pythonDesc': 'Inter-service HTTP overhead + Python runtime.',
    'metrics.onnxDesc': 'Direct in-memory execution without network hops.',
    'metrics.footnote': '* Benchmark executed on the FinanceAI TF-IDF transaction classification pipeline.',

    // Tweets / Microblog
    'tweets.tag': 'Microblog & Notes',
    'tweets.title': 'Posts & Threads on X',
    'tweets.subtitle': 'Notes on Machine Learning, MLOps, statistical validation, and cloud architectures.',
    'tweets.followBtn': 'Follow @CDanqui →',
    'tweets.emptyTitle': 'Upcoming Technical Publications',
    'tweets.emptyDesc': 'I will be sharing practical case studies on Machine Learning pipelines, MLOps, and data engineering on my official X account.',
    'tweets.connectX': 'Connect with @CDanqui on X',
    'tweets.pageTitle': 'Technical Notes, Threads & Tweets',
    'tweets.pageSubtitle': 'Curated insights on data pipelines, MLOps in Java/ONNX, systemic risk prevention, and cloud experiments.',
    'tweets.realtimeTitle': 'Want to follow the journey in real time?',
    'tweets.realtimeDesc': 'I continuously share technical takeaways and architecture decisions on my official X account.',

    // About Section
    'about.tag': 'Journey & Philosophy',
    'about.title': 'From Clinical Radiology to Data Science',
    'about.badge': 'Oracle Next Education (ONE) Graduate',
    'about.p1': 'My healthcare background in diagnostic imaging within high-pressure hospital units (ICU, Coronary Care, Neonatology) instilled an uncompromising standard: absolute precision with noisy data and calm execution under pressure.',
    'about.p2': 'In radiology, I learned to distinguish signal from noise before making high-stakes decisions. Transitioning to Data Science and Machine Learning was a natural evolution: transforming unstructured data into resilient, reproducible predictive systems.',
    'about.p3': "I strongly embrace critical thinking and Nassim Nicholas Taleb's principles of antifragility: before trusting an accuracy metric, I evaluate out-of-distribution risks, heavy-tailed uncertainty, and enforce strict data leakage prevention.",
    'about.pillarsTitle': 'Core Working Pillars:',
    'about.pillar1': 'Interpretable models with rigorous cross-validation.',
    'about.pillar2': 'MLOps and containerized cloud deployment (Docker / OCI).',
    'about.pillar3': 'Clear API data contracts and cross-functional communication with Software teams.',

    // Continuous Learning Section
    'learning.tag': 'Continuous Learning',
    'learning.title': 'Active Courses & Technical Upskilling',
    'learning.subtitle': 'Currently expanding my engineering toolkit with direct focus on cybersecurity, containerization, and production infrastructure.',
    'learning.skillsTitle': 'Key Skills & Competencies:',

    // Contact Section
    'contact.title': 'Looking to hire a Data Scientist Trainee with a production mindset?',
    'contact.desc': 'I am available to join global teams in 100% remote roles. Open to Data Science, Machine Learning, or Data Analytics positions.',
    'contact.linkedInBtn': 'LinkedIn Profile',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.timezone': 'Timezone:'
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.tweets': 'Microblog',
    'nav.metrics': 'Métricas',
    'nav.about': 'Sobre mí',
    'nav.downloadCV': 'Descargar CV',

    // Hero
    'hero.badge': 'Open to Work • Remoto / Global (UTC-3)',
    'hero.title': 'Christian Quidel',
    'hero.subtitle': 'Data Scientist Trainee • MLOps • Python & Cloud Architecture',
    'hero.pitch': 'Egresado de Oracle Next Education (ONE) & Alura Latam con sólida trayectoria previa en diagnóstico por imágenes hospitalario (UCI, Terapia y Neonatología). Transformo datos complejos en soluciones de Machine Learning de alto rendimiento listas para producción, con foco en inferencia nativa ONNX, arquitectura en la nube (OCI) y rigor antifrágil.',
    'hero.btnProjects': 'Ver Proyectos',
    'hero.btnFollowX': 'Seguir en X (@CDanqui)',
    'hero.btnLinkedIn': 'Conectar en LinkedIn',
    'hero.statsTitle': 'Core Stack',
    'hero.statsBadge': 'Producción',
    'hero.statsLanguages': 'Lenguajes:',
    'hero.statsML': 'ML / NLP:',
    'hero.statsMLOps': 'MLOps:',
    'hero.statsCloud': 'Cloud & DevOps:',
    'hero.statsRigor': 'Rigor:',
    'hero.statsRigorValue': 'Sin Data Leakage • IQR EDA',
    'hero.statsLocation': 'Ubicación base:',

    // Projects Section
    'projects.tag': 'Portafolio Técnico',
    'projects.title': 'Proyectos Destacados de Machine Learning',
    'projects.subtitle': 'Soluciones integrales de ciencia de datos, PLN, optimización de latencia y despliegue en la nube.',
    'projects.viewAll': 'Ver todos los proyectos',
    'projects.repoBtn': 'Ver Repositorio',
    'projects.demoBtn': 'Demo en Vivo →',
    'projects.techTitle': 'Aspectos Técnicos Destacados:',

    // Benchmark / Metrics
    'metrics.tag': 'Rendimiento & Métricas MLOps',
    'metrics.title': 'Benchmark de Inferencia y Validación',
    'metrics.subtitle': 'Comparación empírica de latencia de inferencia entre microservicio Python puro y serialización nativa ONNX en Java 17 (Spring Boot).',
    'metrics.chartTitle': 'Latencia de Inferencia por Petición (ms)',
    'metrics.chartReduction': '↓ 98.2% Reducción',
    'metrics.cardResults': 'Resultados de Producción',
    'metrics.pythonDesc': 'Sobrecarga HTTP inter-servicio + runtime de Python.',
    'metrics.onnxDesc': 'Ejecución directa en memoria nativa sin saltos de red.',
    'metrics.footnote': '* Medición realizada sobre el pipeline TF-IDF + clasificador de transacciones en FinanceAI.',

    // Tweets / Microblog
    'tweets.tag': 'Microblog & Reflexiones',
    'tweets.title': 'Publicaciones & Hilos en X',
    'tweets.subtitle': 'Notas sobre Machine Learning, MLOps, validación estadística y arquitectura en la nube.',
    'tweets.followBtn': 'Seguir en @CDanqui →',
    'tweets.emptyTitle': 'Próximamente publicaciones técnicas',
    'tweets.emptyDesc': 'Estaré compartiendo notas y aprendizajes sobre pipelines de Machine Learning, MLOps e ingeniería de datos en mi cuenta oficial de X.',
    'tweets.connectX': 'Conectar con @CDanqui en X',
    'tweets.pageTitle': 'Notas, Hilos & Tweets Técnicos',
    'tweets.pageSubtitle': 'Publicaciones seleccionadas sobre pipelines de datos, MLOps en Java/ONNX, prevención de fallas sistémicas y experimentos en la nube.',
    'tweets.realtimeTitle': '¿Quieres seguir el proceso en tiempo real?',
    'tweets.realtimeDesc': 'Comparto aprendizajes y arquitectura técnica de manera continua en mi cuenta oficial de X.',

    // About Section
    'about.tag': 'Trayectoria & Filosofía',
    'about.title': 'De la Radiología Clínica a la Ciencia de Datos',
    'about.badge': '🇦🇷 Egresado Oracle Next Education (ONE)',
    'about.p1': 'Mi formación previa en diagnóstico por imágenes en entornos hospitalarios críticos (Terapia Intensiva, Unidad Coronaria y Neonatología) forjó en mí un estándar irrenunciable: la precisión absoluta ante datos ruidosos y la capacidad de ejecutar con serenidad bajo presión extrema.',
    'about.p2': 'En radiología aprendí a distinguir la señal del ruido antes de tomar una decisión que impacta vidas. Trasladar esa mirada a la Ciencia de Datos y el Machine Learning fue una evolución natural: transformar datos desestructurados en modelos predictivos resilientes y reproducibles.',
    'about.p3': 'Me considero un defensor del pensamiento crítico y los principios de Nassim Nicholas Taleb sobre la antifragilidad: antes de confiar ciegamente en una métrica de precisión, evalúo la incertidumbre, la distribución de colas pesadas y prevengo la fuga de datos en cada etapa del pipeline.',
    'about.pillarsTitle': 'Pilares de Trabajo:',
    'about.pillar1': 'Modelos interpretables con validación cruzada rigurosa.',
    'about.pillar2': 'MLOps y despliegue real en contenedores (Docker / OCI).',
    'about.pillar3': 'Comunicación transversal y contratos de API claros con equipos de Software.',

    // Continuous Learning Section
    'learning.tag': 'Formación Continua',
    'learning.title': 'Cursos & Especializaciones en Curso',
    'learning.subtitle': 'Ampliando mi stack técnico con foco en seguridad, contenedorización e infraestructura para producción.',
    'learning.skillsTitle': 'Competencias & Habilidades Clave:',

    // Contact Section
    'contact.title': '¿Buscas incorporar un Data Scientist Trainee con criterio de producción?',
    'contact.desc': 'Estoy disponible para sumarme a equipos globales en modalidad 100% remota. Abierto a posiciones de Data Science, Machine Learning o Data Analytics.',
    'contact.linkedInBtn': 'LinkedIn Profile',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.timezone': 'Zona Horaria:'
  }
};
